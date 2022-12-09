import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InputMask from 'react-input-mask';
import { loadLead } from "../../service"
import moment from 'moment';

function ViewAlunoProspectado() {

  const {idLead} = useParams();

  const [lead, setLead] = useState([]);
  
  useEffect(() => {
    loadLead(setLead, idLead);
  }, [])

  return (
    <div className='conteudo'>
      <h1 className='page-title'>Editar Aluno Prospectado</h1>
      <hr className='dashline'/>

      
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="idTurma">ID do Lead</label>
            <input type="number" className="form-control" id="idLead" value={lead.idLead} placeholder="ID lead" disabled required/>
          </div>
          <div className='col-3'>
            <label htmlFor="status_2">Status</label>
            <select id="status_2" className="form-control" disabled>
              <option value="contactado">Contactado</option>
              <option value="contactado">Desistente</option>
              <option value="contactado">Pensativo</option>
              <option value="contactado">Efetivado</option>
            </select>
          </div>
          <div className='col-3'>
            <label htmlFor="telefone">Telefone</label>
            <InputMask mask={"(99)9 9999-9999"} className="form-control" id="telefone" value={lead.telefone}  disabled placeholder="Telefone" required/>
          </div>
          <div className="col-3">
            <label htmlFor="dataCadastro">Data de Cadastro</label>
            <input className="form-control" value={new Date(lead.dataCadastro).toLocaleString()} type="text" id="dataCadastro" disabled required/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-3">
            <label htmlFor="dataNovoContato">Data novo Contato</label>
            <input className="form-control"  type="date" value={moment(new Date(lead.dataNovoContato)).format("YYYY-MM-DD")} disabled id="dataNovoContato" required/>
          </div>
          <div className="col-6">
            <label htmlFor="nomeCompleto">Nome Completo</label>
            <input className="form-control"  type="text" value={lead.nomeCompleto} id="nomeCompleto" required disabled/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-9">
            <label htmlFor="observacao">Observações</label>
            <textarea  defaultValue={lead.observacao} className="form-control" id="observacao" disabled/>
          </div>
        </div>
        <Link to="/alunos_prospectados" className="btn btn-cancelarAdd">Voltar</Link>
    </div>
  )
}

export default ViewAlunoProspectado