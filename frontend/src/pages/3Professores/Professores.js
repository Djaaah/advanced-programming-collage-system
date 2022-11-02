import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProfessor, deletarProfessor } from "../../service"
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

function Professores() {
  const [professores, setProfessores] = useState([]);

  const { idProfessor } = useParams();

  useEffect(() => {
      getProfessor(setProfessores);
  }, [])
  return (
    <div className="conteudo">
     <h1 className='page-title'>Professores</h1>
      <hr className='dashline'/>
        <Link className='btn-add-new' to='/add/new_professor'>Novo Professor</Link>
        <table className='table border shadow'>
          <thead>
          <tr>
            <th className='table-th'>ID</th>
            <th className='table-th'>Nome Completo</th>
            <th className='table-th'>Telefone</th>
            <th className='table-th'>Valor Hora Aula</th>
            <th className='table-th'>ID da Turma</th>
            <th className='table-th'></th>
          </tr>
          </thead>
          <tbody>
            {
              professores.map((professores, index) => {
                return(
                <tr key={index}>
                  <td className='table-td'>{professores.idProfessor}</td>
                  <td className='table-td'>{professores.nome}</td>
                  <td className='table-td'>{professores.telefone}</td>
                  <td className='table-td'>{professores.valorHoraAula}</td>
                  <td className='table-td'>{professores.idTurma}</td>
                  <td className='table-td'>
                    <div className='div-actions'>
                      <button onClick={() => deletarProfessor(professores.idProfessor, setProfessores)} className="div-actions-icons del" title="Deletar Aluno"><BsIcons.BsTrash/></button>
                      <Link to={`/edit_prof/${professores.idProfessor}`} className="div-actions-icons edit" title="Editar Aluno"><FiIcons.FiEdit/></Link>
                      <Link to={`/view_prof/${professores.idProfessor}`} className="div-actions-icons view" title="Visualizar Aluno"><FaIcons.FaRegEye/></Link>
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

export default Professores