import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams  } from 'react-router-dom'
import { getAlunos, getCursos, getProfessor, loadTurma, deletarAlunos, getAlunosByTurma, getCurso } from "../../service"
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';


function ViewTurma() {
  
  const { idTurma } = useParams();

  const [turma, setTurma] = useState([]);

  const [professores, setProfessores] = useState([]);

  const [cursos, setCursos] = useState([]);

  const [curso, setCurso] = useState([]);

  const [alunosTurma, setAlunosTurma] = useState([]);

  const [idCurso, setIdCurso] = useState();

  useEffect(() => {
    getCursos(setCursos);
    getProfessor(setProfessores);
    getAlunosByTurma(setAlunosTurma, idTurma);
    loadTurma(setTurma, idTurma);
  }, [])

  return (
    <div className="conteudo">
      <h1 className='page-title'>Visualizar Turma</h1>
      <hr className='dashline'/>

      <form>
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="idTurma">ID da Turma</label>
            <input type="number" className="form-control" id="idTurma" value={turma.idTurma} placeholder="ID da Turma" disabled required/>
          </div>
          <div className='col-3'>
            <label htmlFor="idProfessor">Professor</label>
            <input id="idProfessor" className="form-control" value={
              professores.map((professor) => {
                return (
                  professor.idProfessor === turma.idProfessor ? `${turma.idProfessor} - ${professor.nome}` : ""
                )
              })
            } disabled />

          </div>
          <div className='col-3'>
            <label htmlFor="idCurso">Curso</label>
            <input id="idCurso" className="form-control" value={
              cursos.map((curso) => {
                return(
                  curso.idCurso === turma.idCurso ? `${curso.idCurso} - ${curso.nomeCurso}` : ""
                )
              })
            } disabled />
          </div>
        </div>
        <div className="row">
        <div className='col'>
            <label htmlFor="valor">Valor</label>
            <input type="text" value={cursos.map((curso) => {
              return(
                curso.idCurso === turma.idCurso ? `R$ ${alunosTurma.length * curso.valor}` : ""
              )
            })} className="form-control" id="valor" placeholder="Valor do Curso" disabled required/>
          </div>
        </div>
          <br/>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th className='table-th'>Matricula</th>
              <th className='table-th'>Nome Completo</th>
              <th className='table-th'>CPF</th>
              <th className='table-th'>Endereço</th>
              <th className='table-th'>Telefone</th>
            </tr>
          </thead>
          <tbody>
                {alunosTurma.map((alunosTurma, index) => {
                  return(
                    <tr key={index}>
                    <td className='table-td'>{alunosTurma.matricula}</td>
                    <td className='table-td'>{alunosTurma.nomeCompleto}</td>
                    <td className='table-td'>{alunosTurma.telefone}</td>
                    <td className='table-td'>{alunosTurma.endereco}</td>
                    <td className='table-td'>{alunosTurma.cpf}</td>
                    <td className='table-td'>
                      <div className='div-actions'>
                        <button onClick={() => deletarAlunos(alunosTurma.matricula, setAlunosTurma)} className="div-actions-icons del" title="Deletar Aluno"><BsIcons.BsTrash/></button>
                        <Link to={`/edit_aluno/${alunosTurma.matricula}`} className="div-actions-icons edit" title="Editar Aluno"><FiIcons.FiEdit/></Link>
                        <Link to={`/view_aluno/${alunosTurma.matricula}`} className="div-actions-icons view" title="Visualizar Aluno"><FaIcons.FaRegEye/></Link>
                      </div>
                    </td>
                  </tr>
                  )
                })
              }
          </tbody>
        </table>

        <Link to="/turmas" className="btn btn-cancelarAdd">Voltar</Link>
      </form>

    </div>
  )
}

export default ViewTurma