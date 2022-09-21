import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'


function Alunos() {

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    loadAlunos();
  }, []);

  const loadAlunos = async () => {
    const result = await Axios.get("http://localhost:8080/alunos")
    setAlunos(result.data)
  }


  return (
    <div className='conteudo'>
      <h1 className='page-title'>Alunos</h1>
      <hr className='dashline'/>
        <Link className='btn-add-new' to='/add/new_aluno'>Novo Aluno</Link>
        <table className='table border shadow'>
          <thead>
          <tr>
            <th className='table-th' scope="col">Matrícula</th>
            <th className='table-th'>Nome Completo</th>
            <th className='table-th'>Telefone</th>
            <th className='table-th'>Endereço</th>
            <th className='table-th'>CPF</th>
            <th className='table-th'>Ação</th>
          </tr>
          </thead>
          <tbody>
            {
              alunos.map((alunos, index) => {
                return(
                <tr>
                  <td className='table-td' key={index}>{alunos.matricula}</td>
                  <td className='table-td'>{alunos.nome_completo}</td>
                  <td className='table-td'>{alunos.telefone}</td>
                  <td className='table-td'>{alunos.endereco}</td>
                  <td className='table-td'>{alunos.cpf}</td>
                </tr>
                )
              })
            }
          </tbody>
            
          
    
        </table>
    </div>
  )
}

export default Alunos