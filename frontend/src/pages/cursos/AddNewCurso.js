import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { inserirDadosCurso } from "../../service";

function AddNewCurso() {
  let navigate = useNavigate();

  const [curso, setCurso] = useState({
    nomeCurso: "",
    chAula: "",
    chTotal: "",
    turno: "",
    valor: "",
    seg: "",
    ter: "",
    qua: "",
    qui: "",
    sex: "",
    sab: "",
  });

  const {
    nomeCurso,
    chTotal,
    turno,
    valor,
    seg,
    ter,
    qua,
    qui,
    sex,
    sab,
  } = curso;

  const onInputChange = (e) => {
    e.preventDefault();
    setCurso({ ...curso, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    inserirDadosCurso(curso);
    navigate("/cursos");
  };

  useEffect(() => {});
  return (
    <div className="conteudo">
      <h1 className="page-title">Adicionar Novo Curso</h1>
      <hr className="dashline" />

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-3">
            <label htmlFor="id-curso">ID do Curso</label>
            <input
              type="number"
              className="form-control"
              id="id-curso"
              value={0}
              placeholder="Matrícula"
              disabled
              required
            />
          </div>
          <div className="col-5">
            <label htmlFor="matricula-aluno">Nome do Curso</label>
            <input
              type="text"
              onChange={(e) => onInputChange(e)}
              className="form-control"
              id="nomeCurso"
              placeholder="Nome do Curso"
              required
            />
          </div>
          <div className="col-3">
            <label htmlFor="turno">Turno do Curso</label>
            <select
              type="text"
              className="form-control"
              id="turno"
              onChange={(e) => onInputChange(e)}
              required>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-1">
            <label htmlFor="turno">Segunda</label>
            <select
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="seg"
              required>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Terça</label>
            <select
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="ter"
              required>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Quarta</label>
            <select
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="qua"
              required>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Quinta</label>
            <select
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="qui"
              required>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Sexta</label>
            <select
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="sex"
              required>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
          <div className="col-1">
            <label htmlFor="turno">Sábado</label>
            <select
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="sab"
              required>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-2">
            <label htmlFor="chAula">Carga Horaria do Curso</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => onInputChange(e)}
              id="chTotal"
              placeholder="Carga Horaria da Aula"
              required
            />
          </div>

          <div className="col-3">
            <label htmlFor="chAula">Valor do Curso</label>
            <input
              type="number"
              className="form-control"
              id="valor"
              onChange={(e) => onInputChange(e)}
              placeholder="Valor do Curso"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-addAluno">
          Registrar Curso
        </button>
        <Link to="/cursos" className="btn btn-cancelarAdd">
          Cancelar
        </Link>
      </form>
    </div>
  );
}

export default AddNewCurso;
