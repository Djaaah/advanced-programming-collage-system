import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAlunos, deletarAlunos } from "../../service"
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);

  const { matricula } = useParams();

  useEffect(() => {
    getAlunos(setAlunos);
  }, [])

  return (
    <div className='conteudo'>
      <h1 className='page-title'>Alunos</h1>
      <hr className='dashline' />
      <Link className='btn-add-new' to='/add/new_aluno'>Novo Aluno</Link>
      <table className='table border shadow'>
        <thead>
          <tr>
            <th className='table-th'>Matrícula</th>
            <th className='table-th'>Nome Completo</th>
            <th className='table-th'>Telefone</th>
            <th className='table-th'>Endereço</th>
            <th className='table-th'>CPF</th>
            <th className='table-th'></th>
          </tr>
        </thead>
        <tbody>
          {
            alunos.map((alunos, index) => {
              return (
                <tr key={index}>
                  <td className='table-td'>{alunos.matricula}</td>
                  <td className='table-td'>{alunos.nomeCompleto}</td>
                  <td className='table-td'>{alunos.telefone}</td>
                  <td className='table-td'>{alunos.endereco}</td>
                  <td className='table-td'>{alunos.cpf}</td>
                  <td className='table-td'>
                    <div className='div-actions'>
                      <button onClick={() => deletarAlunos(alunos.matricula, setAlunos)} className="div-actions-icons del" title="Deletar Aluno"><BsIcons.BsTrash /></button>
                      <Link to={`/edit_aluno/${alunos.matricula}`} className="div-actions-icons edit" title="Editar Aluno"><FiIcons.FiEdit /></Link>
                      <Link to={`/view_aluno/${alunos.matricula}`} className="div-actions-icons view" title="Visualizar Aluno"><FaIcons.FaRegEye /></Link>
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

export default Alunos;