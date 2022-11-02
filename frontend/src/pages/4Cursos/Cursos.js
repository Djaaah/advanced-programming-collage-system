import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCursos, deletarCurso } from "../../service"
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

function Cursos() {
  
  const [cursos, setCursos] = useState([]);

  const { idCurso } = useParams();

  useEffect(() => {
      getCursos(setCursos);
  }, [])
  
  return (
    <div className="conteudo">
      <h1 className='page-title'>Cursos</h1>
      <hr className='dashline'/>
        <Link className='btn-add-new' to='/add/new_curso'>Novo Curso</Link>
        <table className='table border shadow'>
          <thead>
          <tr>
            <th className='table-th'>ID</th>
            <th className='table-th'>Nome do Curso</th>
            <th className='table-th'>Turno</th>
            <th className='table-th'>valor</th>
            <th className='table-th'>Carga Horaria Total</th>
            <th className='table-th'></th>
          </tr>
          </thead>
          <tbody>
            {
              cursos.map((curso, index) => {
                return(
                <tr key={index}>
                  <td className='table-td'>{curso.idCurso}</td>
                  <td className='table-td'>{curso.nomeCurso}</td>
                  <td className='table-td'>{curso.turno}</td>
                  <td className='table-td'>R$ {curso.valor}</td>
                  <td className='table-td'>{curso.chTotal}/h</td>
                  <td className='table-td'>
                    <div className='div-actions'>
                      <button onClick={() => deletarCurso(curso.idCurso, setCursos)} className="div-actions-icons del" title="Deletar Aluno"><BsIcons.BsTrash/></button>
                      <Link to={`/edit_curso/${curso.idCurso}`} className="div-actions-icons edit" title="Editar Aluno"><FiIcons.FiEdit/></Link>
                      <Link to={`/view_curso/${curso.idCurso}`} className="div-actions-icons view" title="Visualizar Aluno"><FaIcons.FaRegEye/></Link>
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

export default Cursos