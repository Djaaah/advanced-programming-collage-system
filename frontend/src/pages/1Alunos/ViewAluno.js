import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import InputMask from 'react-input-mask';
import { CursosData } from '../4Cursos/CursosData';
import { loadAluno } from "../../service"


const ViewAluno = () => {
    const { matricula } = useParams();

    const [aluno, setAluno] = useState({
        nomeCompleto: "",
        cpf: "",
        endereco: "",
        telefone: "", 
    });

    useEffect(() => {
        loadAluno(setAluno, matricula);
    }, [])

    return (
    <div className='conteudo'>
    <h1 className='page-title'>Visualizar Aluno</h1>
    <hr className='dashline'/>
        
    
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
                        <option key={index} value={item.value} disabled>{item.titleCurso}</option>
                    )
                })}
            </select>
        </div>
    </div>

    <p></p>
    
    <div className='row'> 
        <div className="col">
            <label htmlFor="nome-completo">Nome Completo</label>
            <input type="text" className="form-control" value={aluno.nomeCompleto} id="nomeCompleto" placeholder="Nome Completo" maxLength="45" required disabled/>
        </div>
        
        <div className="col">
            <label htmlFor="cpf">CPF</label>
            <InputMask mask={"999.999.999-99"} className="form-control" id="cpf" value={aluno.cpf} placeholder="CPF" required disabled/>
        </div>
        <div className="col">
            <label htmlFor="telefone">Telefone</label>
            <InputMask mask={"(99)9 9999-9999"} className="form-control" id="telefone" value={aluno.telefone} placeholder="Telefone" required disabled/>
        </div>
    </div>
    <br/>
    <div className="row">
        <div className="col">
            <label htmlFor="endereco">Endereço Completo</label>
            <input type="text" id="endereco" value={aluno.endereco} className="form-control" placeholder="Endereço Completo" required disabled/>
        </div>
    </div>
    <Link to="/alunos" className="btn btn-cancelarAdd">Voltar</Link>
    </div>
  )
}

export default ViewAluno