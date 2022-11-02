import React, { useState, useEffect }  from 'react'
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'
import { getLeads, deletarLead } from "../../service"


function AlunosProspectados() {

  const [leads, setLeads] = useState([]);

  const { idLead } = useParams();
  
  useEffect(() => {
    getLeads(setLeads)
  }, [])

  return (
    <div className="conteudo">
      <h1 className='page-title'>Alunos Prospectados</h1>
      <hr className='dashline'/>
        <Link className='btn-add-new' to='/add/new_aluno_prospectado'>Novo Lead</Link>
        <table className='table border shadow'>
          <thead>
          <tr>
            <th className='table-th'>ID</th>
            <th className='table-th'>Nome Completo</th>
            <th className='table-th'>Telefone</th>
            <th className='table-th'>Status</th>
            <th className='table-th'>Data de Cadastro</th>
            <th className='table-th'></th>
          </tr>
          </thead>
          <tbody>
            {
              leads.map((leads, index) => {
                
                return(
                <tr key={index}>
                  <td className='table-td'>{leads.idLead}</td>
                  <td className='table-td'>{leads.nomeCompleto}</td>
                  <td className='table-td'>{leads.telefone}</td>
                  <td className='table-td'>{leads.status_2}</td>
                  <td className='table-td'>{new Date(leads.dataCadastro).toLocaleDateString("pt-BR")}</td>
                  <td className='table-td'>
                    <div className='div-actions'>
                      <button onClick={() => deletarLead(leads.idLead, setLeads)} className="div-actions-icons del" title="Deletar Aluno"><BsIcons.BsTrash/></button>
                      <Link to={`/edit_lead/${leads.idLead}`} className="div-actions-icons edit" title="Editar Aluno"><FiIcons.FiEdit/></Link>
                      <Link to={`/view_lead/${leads.idLead}`} className="div-actions-icons view" title="Visualizar Aluno"><FaIcons.FaRegEye/></Link>
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

export default AlunosProspectados