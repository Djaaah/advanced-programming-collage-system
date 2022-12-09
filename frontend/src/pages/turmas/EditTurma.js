import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getCursos,
  getProfessor,
  loadCurso,
  loadProfessor,
  loadTurma,
  deletarAlunos,
  getAlunosByTurma,
  atualizarDadosTurma,
} from "../../service";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";

function EditTurma() {
  const { idTurma } = useParams();

  const [turma, setTurma] = useState({
    idProfessor: "",
    idCurso: "",
  });

  const { idProfessor, idCurso } = turma;

  const [professores, setProfessores] = useState([]);

  const [cursos, setCursos] = useState([]);

  const [professor, setProfessor] = useState([]);

  const [curso, setCurso] = useState([]);
  useEffect(() => {
    getCursos(setCursos);
    getProfessor(setProfessores);
    getAlunosByTurma(setAlunosTurma, idTurma);
    loadTurma(setTurma, idTurma);
  }, []);

  loadCurso(setCurso, turma.idCurso);
  loadProfessor(setProfessor, turma.idProfessor);
  
  const loadDados = () => {
    for (let i = 0; i < professores.length; i++) {
      if (curso.idCurso === turma.idCurso) {
        setCurso(curso.nomeCurso);
        setCurso(curso.idCurso);
      }
      if (professor.idProfessor === turma.idProfessor) {
        setProfessor(professor.nome);
        setProfessor(professor.idProfessor);
      }
    }
  };

  const [alunosTurma, setAlunosTurma] = useState([]);

  let navigate = useNavigate();

  const onInputChange = (e) => {
    e.preventDefault();
    setTurma({ ...turma, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    atualizarDadosTurma(turma, idTurma);
    navigate("/turmas");
  };

  return (
    <div className="conteudo">
      <h1 className="page-title">Editar Turma</h1>
      <hr className="dashline" />

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-3">
            <label htmlFor="idTurma">ID da Turma</label>
            <input
              type="number"
              className="form-control"
              id="idTurma"
              value={turma.idTurma}
              placeholder="ID da Turma"
              disabled
              required
            />
          </div>
          <div className="col-3">
            <label htmlFor="idProfessor">Professor</label>
            <select
              id="idProfessor"
              onChange={(e) => onInputChange(e)}
              className="form-control">
              <option default hidden value={professor.idProfessor}>
                {professor.idProfessor} - {professor.nome}
              </option>
              {professores.map((professor, index) => {
                return (
                  <option key={index} value={professor.idProfessor}>
                    {professor.idProfessor} - {professor.nome}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="idCurso">Curso</label>
            <select
              id="idCurso"
              onChange={(e) => onInputChange(e)}
              className="form-control">
              <option default hidden value={curso.idCurso}>
                {curso.idCurso} - {curso.nomeCurso}
              </option>
              {cursos.map((cursos, index) => {
                return (
                  <option key={index} value={cursos.idCurso}>
                    {cursos.idCurso} - {cursos.nomeCurso}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="valor">Valor</label>
            <input
              type="text"
              value={cursos.map((curso) => {
                return curso.idCurso === turma.idCurso
                  ? `R$ ${alunosTurma.length * curso.valor}`
                  : "";
              })}
              className="form-control"
              id="valor"
              placeholder="Valor do Curso"
              disabled
              required
            />
          </div>
        </div>
        <br />
        <table className="table border shadow">
          <thead>
            <tr>
              <th className="table-th">Matricula</th>
              <th className="table-th">Nome Completo</th>
              <th className="table-th">CPF</th>
              <th className="table-th">Endereço</th>
              <th className="table-th">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {alunosTurma.map((alunosTurma, index) => {
              return (
                <tr key={index}>
                  <td className="table-td">{alunosTurma.matricula}</td>
                  <td className="table-td">{alunosTurma.nomeCompleto}</td>
                  <td className="table-td">{alunosTurma.telefone}</td>
                  <td className="table-td">{alunosTurma.endereco}</td>
                  <td className="table-td">{alunosTurma.cpf}</td>
                  <td className="table-td">
                    <div className="div-actions">
                      <button
                        onClick={() =>
                          deletarAlunos(alunosTurma.matricula, setAlunosTurma)
                        }
                        className="div-actions-icons del"
                        title="Deletar Aluno">
                        <BsIcons.BsTrash />
                      </button>
                      <Link
                        to={`/edit_aluno/${alunosTurma.matricula}`}
                        className="div-actions-icons edit"
                        title="Editar Aluno">
                        <FiIcons.FiEdit />
                      </Link>
                      <Link
                        to={`/view_aluno/${alunosTurma.matricula}`}
                        className="div-actions-icons view"
                        title="Visualizar Aluno">
                        <FaIcons.FaRegEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button type="submit" className="btn btn-addAluno">
          Atualizar Turma
        </button>
        <Link to="/turmas" className="btn btn-cancelarAdd">
          Voltar
        </Link>
      </form>
    </div>
  );
}

export default EditTurma;
