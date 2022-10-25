import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask';
import { getAlunos, getTurmas, inserirDadosAlunos } from "../../service"

const AddNewAluno = () => {

    let navigate = useNavigate();

    const [alunos, setAlunos] = useState([]);

    const [turmas, setTurmas] = useState([]);

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
        inserirDadosAlunos(aluno);
        navigate('/alunos');
    }


    useEffect(() => {
        getTurmas(setTurmas)
        getAlunos(setAlunos);
    }, [])

    return (
        <div className='conteudo'>
            <h1 className='page-title'>Adicionar Novo Aluno</h1>
            <hr className='dashline' />

            <form onSubmit={(e) => onSubmit(e)}>
                <div className='row'>
                    <div className="col-3">
                        <label htmlFor="matricula-aluno">Matrícula</label>
                        <input type="number" className="form-control" id="matricula-aluno" value={alunos.length === 0 ? "" : alunos[alunos.length - 1].matricula + 1} placeholder="Matrícula" disabled required />
                    </div>
                    <div className="col-3">
                        <label htmlFor="curso-aluno">ID da Turma {/*Ficará aqui o ID da turma, apenas selecionarei a turma ex: GRA999999xNNA  x é o periodo do curso*/}</label>
                        <select id="idTurma" onChange={e => onInputChange(e)} className="form-control">
                            {turmas.map((item, index) => {
                                return (
                                    <option key={index} value={item.idTurma}>{item.idTurma}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <p></p>

                <div className='row'>
                    <div className="col">
                        <label htmlFor="nome-completo">Nome Completo</label>
                        <input type="text" className="form-control" onChange={(e) => onInputChange(e)} id="nomeCompleto" placeholder="Nome Completo" maxLength="45" required />
                    </div>

                    <div className="col">
                        <label htmlFor="cpf">CPF</label>
                        <InputMask mask={"999.999.999-99"} className="form-control" id="cpf" onChange={(e) => onInputChange(e)} placeholder="CPF" required />
                    </div>
                    <div className="col">
                        <label htmlFor="telefone">Telefone</label>
                        <InputMask mask={"(99)9 9999-9999"} className="form-control" id="telefone" onChange={(e) => onInputChange(e)} placeholder="Telefone" required />
                    </div>
                </div>

                <br />
                
                <div className="row">
                    <div className="col">
                        <label htmlFor="endereco">Endereço Completo</label>
                        <input type="text" id="endereco" onChange={(e) => onInputChange(e)} className="form-control" placeholder="Endereço Completo" required />
                    </div>
                </div>

                <button type="submit" className="btn btn-addAluno">Registrar Aluno</button>
                <Link to="/alunos" className="btn btn-cancelarAdd">Cancelar</Link>
            </form>
        </div>
    )
}

export default AddNewAluno