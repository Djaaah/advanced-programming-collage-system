import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InputMask from 'react-input-mask';
import {getLeads, inserirDadosLead, loadLead, atualizarDadosLead } from "../../service"
import moment from 'moment';

function EditAlunoProspectado() {
  
  let navigate = useNavigate();

  const { idLead } = useParams();

  const [lead, setLead] = useState({
    nomeCompleto: "",
    telefone: "",
    dataCadastro: "",
    status_2: "",
    dataNovoContato: "",
    observacao: "",
  });

  const dataFormadata = (lead) => {
    const year = new Date(lead.dataNovoContato).getFullYear();
    
  }

  const { nomeCompleto, telefone, dataCadastro, status_2, dataNovoContato, observacao } = lead; 

  const onInputChange = (e) => {
    e.preventDefault();
    setLead({ ...lead, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    atualizarDadosLead(lead, idLead);
    navigate('/alunos_prospectados');
  }

  useEffect(() => {
    loadLead(setLead, idLead);
  }, [])
  
  return (
    <div className="conteudo">
      <h1 className='page-title'>Editar Aluno Prospectado</h1>
      <hr className='dashline'/>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="idTurma">ID do Lead</label>
            <input type="number" className="form-control" id="idLead" value={lead.idLead} placeholder="ID lead" disabled required/>
          </div>
          <div className='col-3'>
            <label htmlFor="status_2">Status</label>
            <select id="status_2" onChange={e => onInputChange(e)} className="form-control">
              <option default hidden value={lead.status_2}>{lead.status_2}</option>
              <option value="Contactado">Contactado</option>
              <option value="Desistente">Desistente</option>
              <option value="Pensativo">Pensativo</option>
              <option value="Efetivado">Efetivado</option>
            </select>
          </div>
          <div className='col-3'>
            <label htmlFor="telefone">Telefone</label>
            <InputMask mask={"(99)9 9999-9999"} className="form-control" id="telefone" value={lead.telefone} onChange={(e) => onInputChange(e)} placeholder="Telefone" required/>
          </div>
          <div className="col-3">
            <label htmlFor="dataCadastro">Data de Cadastro</label>
            <input className="form-control" onChange={(e) => onInputChange(e)} value={new Date(lead.dataCadastro).toLocaleString()} type="text" id="dataCadastro" disabled required/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-3">
            <label htmlFor="dataNovoContato">Data novo Contato</label>
            <input className="form-control" onChange={(e) => onInputChange(e)} type="date" value={moment(new Date(lead.dataNovoContato)).format("YYYY-MM-DD")} id="dataNovoContato" required/>
          </div>
          <div className="col-6">
            <label htmlFor="nomeCompleto">Nome Completo</label>
            <input className="form-control" onChange={(e) => onInputChange(e)} type="text" value={lead.nomeCompleto} id="nomeCompleto" required/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-9">
            <label htmlFor="observacao">Observações</label>
            <textarea onChange={(e) => onInputChange(e)} defaultValue={lead.observacao} className="form-control" id="observacao"/>
          </div>
        </div>
        <button type="submit" className="btn btn-addAluno">Atualizar Lead</button>
        <Link to="/alunos_prospectados" className="btn btn-cancelarAdd">Cancelar</Link>
      </form>
    </div>
  )
}

export default EditAlunoProspectado