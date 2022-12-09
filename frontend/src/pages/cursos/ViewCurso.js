import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { loadCurso } from "../../service";

function ViewCurso() {
  const { idCurso } = useParams();

  const [curso, setCurso] = useState([]);

  useEffect(() => {
    loadCurso(setCurso, idCurso);
  });

  return (
    <div className="conteudo">
      <h1 className="page-title">Visualizar Curso</h1>
      <hr className="dashline" />
      <form>
        <div className="row">
          <div className="col-3">
            <label htmlFor="id-curso">ID do Curso</label>
            <input
              type="number"
              className="form-control"
              id="id-curso"
              value={curso.idCurso}
              placeholder="Matrícula"
              disabled
              required
            />
          </div>
          <div className="col-5">
            <label htmlFor="matricula-aluno">Nome do Curso</label>
            <input
              type="text"
              className="form-control"
              id="nomeCurso"
              placeholder="Nome do Curso"
              value={curso.nomeCurso}
              required
              disabled
            />
          </div>
          <div className="col-3">
            <label htmlFor="turno">Turno do Curso</label>
            <input type="text" className="form-control" value={curso.turno} disabled/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-1">
            <label htmlFor="turno">Segunda</label>
            <input className="form-control" id="ter" required disabled value={curso.seg === 1 ? "Sim" : "Não"}/>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Terça</label>
            <input className="form-control" id="ter" required disabled value={curso.ter === 1 ? "Sim" : "Não"}/>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Quarta</label>
            <input className="form-control" id="ter" required disabled value={curso.qua === 1 ? "Sim" : "Não"}/>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Quinta</label>
            <input className="form-control" id="ter" required disabled value={curso.qui === 1 ? "Sim" : "Não"}/>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Sexta</label>
            <input className="form-control" id="ter" required disabled value={curso.sex === 1 ? "Sim" : "Não"}/>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Sábado</label>
            <input className="form-control" id="ter" required disabled value={curso.sab === 1 ? "Sim" : "Não"}/>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <label htmlFor="chAula">Carga horaria Total do Curso</label>
            <input
              type="number"
              className="form-control"
              id="chAula"
              placeholder="Carga Horaria da Aula"
              disabled
              value={curso.chTotal}
              required
            />
          </div>
          <div className="col-3">
            <label htmlFor="chAula">Valor do Curso</label>
            <input
              type="number"
              className="form-control"
              id="valor"
              placeholder="Valor do Curso"
              required
              disabled
              value={`${curso.valor}`}
            />
          </div>
        </div>
        <Link to="/cursos" className="btn btn-cancelarAdd">
          Voltar
        </Link>
      </form>
    </div>
  );
}

export default ViewCurso;
