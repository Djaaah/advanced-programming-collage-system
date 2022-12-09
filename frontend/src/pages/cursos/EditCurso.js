import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { atualizarDadosCurso, loadCurso } from "../../service";

function EditCurso() {
  let navigate = useNavigate();

  const { idCurso } = useParams();

  const [curso, setCurso] = useState({
    nomeCurso: "",
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

  const { nomeCurso, chTotal, turno, valor, seg, ter, qua, qui, sex, sab } =
    curso;

  const onInputChange = (e) => {
    e.preventDefault();
    setCurso({ ...curso, [e.target.id]: e.target.value });
    console.log(curso);
  };

  const onSubmit = () => {
    atualizarDadosCurso(curso, idCurso);
    navigate("/cursos");
  };

  useEffect(() => {
    loadCurso(setCurso, idCurso);
  }, []);

  return (
    <div className="conteudo">
      <h1 className="page-title">Editar Curso</h1>
      <hr className="dashline" />

      <form onSubmit={(e) => onSubmit(e)}>
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
              onChange={(e) => onInputChange(e)}
              className="form-control"
              id="nomeCurso"
              value={curso.nomeCurso}
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
              <option default hidden value={curso.turno}>
                {curso.turno}
              </option>
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
              <option default hidden value={curso.seg === 1 ? "Sim" : "Não"}>
                {curso.seg === 1 ? "Sim" : "Não"}
              </option>
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
              <option default hidden value={curso.ter === 1 ? "Sim" : "Não"}>
                {curso.ter === 1 ? "Sim" : "Não"}
              </option>
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
              <option default hidden value={curso.qua === 1 ? "Sim" : "Não"}>
                {curso.qua === 1 ? "Sim" : "Não"}
              </option>
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
                <option default hidden value={curso.qui === 1 ? "Sim" : "Não"}>{curso.qui === 1 ? "Sim" : "Não"}</option>
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
                <option default hidden value={curso.sex === 1 ? "Sim" : "Não"}>{curso.sex === 1 ? "Sim" : "Não"}</option>
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
                <option default hidden value={curso.sab === 1 ? "Sim" : "Não"}>{curso.sab === 1 ? "Sim" : "Não"}</option>
              <option value="0">Não</option>
              <option value="1">Sim</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3">
            <label htmlFor="chAula">Carga Horaria Total do Curso</label>
            <input
              type="number"
              className="form-control"
              id="chTotal"
              onChange={(e) => onInputChange(e)}
              placeholder="Carga Horaria Total do Curso"
              required
              value={curso.chTotal}
            />
          </div>
          <div className="col-3">
            <label htmlFor="chAula">Valor do Curso</label>
            <input
              type="number"
              className="form-control"
              id="valor"
              value={curso.valor}
              onChange={(e) => onInputChange(e)}
              placeholder="Valor do Curso"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-addAluno">
          Atualizar Curso
        </button>
        <Link to="/cursos" className="btn btn-cancelarAdd">
          Cancelar
        </Link>
      </form>
    </div>
  );
}

export default EditCurso;
