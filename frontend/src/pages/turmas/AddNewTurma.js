import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { getCursos, getProfessor, getTurmas, inserirDadosTurmas } from "../../service"

function AddNewTurma() {
  let navigate = useNavigate();

  const [turma, setTurma] = useState({
    idCurso: "",
    idProfessor: "",
    valor: "",
  });

  const [professores, setProfessores] = useState([]);
  
  const [cursos, setCursos] = useState([]);

  const { idcurso, idProfessor, valor } = turma; 

  const onInputChange = (e) => {
    e.preventDefault();
    setTurma({ ...turma, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    inserirDadosTurmas(turma);
    getTurmas(setTurma);
    navigate('/turmas');
  }

  useEffect(() => {
    getCursos(setCursos);
    getProfessor(setProfessores)
  }, [])

  return (
    <div className="conteudo">
      <h1 className='page-title'>Adicionar Nova Turma</h1>
      <hr className='dashline'/>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="idTurma">ID da Turma</label>
            <input type="number" className="form-control" id="idTurma" value={0} placeholder="ID da Turma" disabled required/>
          </div>
          <div className='col-3'>
            <label htmlFor="idProfessor">Professor</label>
            <select id="idProfessor" onChange={e => onInputChange(e)} className="form-control">
              {professores.map((item, index) => {
                return(
                  <option key={index} value={item.idProfessor}>{item.idProfessor} - {item.nome}</option>
                )
              })}
            </select>
          </div>
          <div className='col-3'>
            <label htmlFor="idCurso">Curso</label>
            <select id="idCurso" onChange={e => onInputChange(e)} className="form-control" required>
              {cursos.map((item, index) => {
                return(
                  <option key={index} value={item.idCurso}>{item.idCurso} - {item.nomeCurso}</option>
                )
              })}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-addAluno">Registrar Turma</button>
        <Link to="/turmas" className="btn btn-cancelarAdd">Cancelar</Link>
      </form>

    </div>
  )
}

export default AddNewTurma