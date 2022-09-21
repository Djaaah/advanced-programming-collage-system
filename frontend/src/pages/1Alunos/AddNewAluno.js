import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask';
import { CursosData } from '../4Cursos/CursosData';
import Axios from "axios";


const AddNewAluno = () => {
    const [matricula, setMatricula] = useState();
    const [cep, setCEP] = useState();
    

    return (
    <div className='conteudo'>
    <h1 className='page-title'>Adicionar Novo Aluno</h1>
    <hr className='dashline'/>

    <form>
    <div className='row'>
        <div className="col-3">
            <label htmlFor="matricula-aluno">Matrícula</label>
            <input type="text" className="form-control" id="matricula-aluno" placeholder="Matrícula" disabled required/>
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
            <input type="text" className="form-control" id="nome-completo" placeholder="Nome Completo" maxLength="45" required/>
        </div>
        
        <div className="col">
            <label htmlFor="surname">CPF</label>
            <InputMask className="form-control" id="cpf" mask={"999.999.999-99"} placeholder="CPF" required/>
        </div>
    </div>
    <br/>
    <div className="row">
        <div className="col-2">
            <label htmlFor="cep">CEP</label>
            <InputMask mask={"99.999-999"} onChange={(e) => setCEP(e.target.value)} className="form-control" name="cep" id="cep" placeholder="CEP" required/>
        </div>

        <div className="col-5">
            <label htmlFor="logradouro">Rua</label>
            <input type="text" className="form-control" required/>
        </div>
        <div className="col-2">
            <label htmlFor="numero-casa">Número</label>
            <input type="text" className="form-control" id="numero-casa" required/>
        </div>
        <div className="col-2">
            <label htmlFor="numero-casa">Estado</label>
            <input type="text" className="form-control" id="estado" required/>
        </div>
    </div>
    <div className="btn">
        <button type="submit" className="btn-add-new-voter">Registrar Aluno</button>
    </div>
    </form>
    </div>
  )
}

export default AddNewAluno