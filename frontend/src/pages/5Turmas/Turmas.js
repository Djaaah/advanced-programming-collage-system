import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTurmas, getCursos, deletarTurmas, getProfessor, loadTurma, getAlunosByTurma, getAlunos } from '../../service';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

function Turmas() {

  const [turmas, setTurmas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [turma, setTurma] = useState([]);
  const [alunos, setAlunos] = useState([]);

  const { idTurma } = useParams();

  useEffect(() => {
    getProfessor(setProfessores);
    getCursos(setCursos);
    getTurmas(setTurmas);
    getAlunos(setAlunos);
    loadTurma(setTurma, idTurma);
  }, [])

  return (
    <div className="conteudo">
        <h1 className="page-title">Turmas</h1>
        <hr className='dashline'/>
        <Link className='btn-add-new' to='/add/new_turma'>Nova Turma</Link>

        <table className='table border shadow'>
          <thead>
          <tr>
            <th className='table-th'>ID Turma</th>
            <th className='table-th'>Curso</th>
            <th className='table-th'>Professor</th>
            <th className='table-th'>Valor</th>
            <th className='table-th'></th>
          </tr>
          </thead>
          <tbody>
            {
              turmas.map((turmas, index) => {
                return(
                <tr key={index}>
                  <td className='table-td'>{turmas.idTurma}</td>
                  <td className='table-td'>
                  {cursos.map((cursos) => {
                    return(
                      cursos.idCurso === turmas.idCurso ? cursos.nomeCurso : ""
                    )
                  })}
                  </td>
                  <td className='table-td'>
                  {professores.map((professores) => {
                    return (
                      professores.idProfessor === turmas.idProfessor ? professores.nome : ""
                    )
                  })}
                  </td>
                  <td  className='table-td'>R$ </td>
                  <td  className='table-td'>
                    <div className='div-actions'>
                      <button onClick={() => deletarTurmas(turmas.idTurma, setTurmas)} className="div-actions-icons del" title="Deletar Turma"><BsIcons.BsTrash/></button>
                      <Link to={`/edit_turma/${turmas.idTurma}`} className="div-actions-icons edit" title="Editar Turma"><FiIcons.FiEdit/></Link>
                      <Link to={`/view_turma/${turmas.idTurma}`} className="div-actions-icons view" title="Visualizar Turma"><FaIcons.FaRegEye/></Link>
                    </div> 
                  </td>
                </tr>
                )
              })
            }
          </tbody>

        </table>
    </div>
  )
}

export default Turmas