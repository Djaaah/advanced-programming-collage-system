import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InputMask from 'react-input-mask';
import { CursosData } from '../4Cursos/CursosData';
import { atualizarDadosAlunos, loadAluno } from "../../service"


const EditAluno = () => {

    let navigate = useNavigate();

    const { matricula } = useParams();

    const [aluno, setAluno] = useState({
        nomeCompleto: "",
        cpf: "",
        endereco: "",
        telefone: "",
        idTurma: "",
    });

    const { nomeCompleto, cpf, endereco, telefone, idTurma } = aluno;

    const onInputChange = (e) => {
        setAluno({ ...aluno, [e.target.id]: e.target.value });
      }; 

    const onSubmit = () => {
        atualizarDadosAlunos(aluno, matricula);
        navigate('/alunos');
    }

    useEffect(() => {
        loadAluno(setAluno, matricula);
    }, [])

    return (
    <div className='conteudo'>
    <h1 className='page-title'>Editar Aluno</h1>
    <hr className='dashline'/>
        
    <form onSubmit={(e) => onSubmit(e)}>
    <div className='row'>
        <div className="col-3">
            <label htmlFor="matricula-aluno">Matrícula</label>
            <input type="number" className="form-control" id="matricula-aluno" value={aluno.matricula} placeholder="Matrícula" disabled required/>
        </div>
        <div className="col-3">
            <label htmlFor="curso-aluno">Curso</label>
            <select className="form-control">
                {CursosData.map((item, index) => {
                    return(
                        <option key={index} value={item.value}>{item.titleCurso}</option>
                    )
                })}
            </select>
        </div>
    </div>

    <p></p>
    
    <div className='row'> 
        <div className="col">
            <label htmlFor="nome-completo">Nome Completo</label>
            <input type="text" className="form-control"  onChange={(e) => onInputChange(e)} value={aluno.nomeCompleto} id="nomeCompleto" placeholder="Nome Completo" maxLength="45" required/>
        </div>
        
        <div className="col">
            <label htmlFor="cpf">CPF</label>
            <InputMask mask={"999.999.999-99"} className="form-control" id="cpf" value={aluno.cpf} onChange={(e) => onInputChange(e)}  placeholder="CPF" required/>
        </div>
        <div className="col">
            <label htmlFor="telefone">Telefone</label>
            <InputMask mask={"(99)9 9999-9999"} className="form-control" id="telefone" value={aluno.telefone} onChange={(e) => onInputChange(e)} placeholder="Telefone" required/>
        </div>
    </div>
    <br/>
    <div className="row">
        <div className="col">
            <label htmlFor="endereco">Endereço Completo</label>
            <input type="text" id="endereco" onChange={(e) => onInputChange(e)} value={aluno.endereco} className="form-control" placeholder="Endereço Completo" required/>
        </div>
    </div>
    
    <button type="submit" className="btn btn-addAluno">Atualizar Aluno</button>
    <Link to="/alunos" className="btn btn-cancelarAdd">Cancelar</Link>

    </form>
    
    </div>
  )
}

export default EditAluno