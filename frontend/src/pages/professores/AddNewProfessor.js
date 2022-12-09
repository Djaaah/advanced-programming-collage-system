import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { inserirDadosProfessor, getTurmas } from "../../service";
import InputMask from "react-input-mask";
function AddNewProfessor() {
  let navigate = useNavigate();

  const [professor, setProfessor] = useState({
    nome: "",
    telefone: "",
    valorHoraAula: "",
  });

  const { nome, telefone, valorHoraAula } = professor;

  const onInputChange = (e) => {
    e.preventDefault();
    setProfessor({ ...professor, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    inserirDadosProfessor(professor);
    navigate("/professores");
  };

  return (
    <div className="conteudo">
      <h1 className="page-title">Adicionar Novo Professor</h1>
      <hr className="dashline" />

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-3">
            <label htmlFor="matricula-aluno">ID do Professor</label>
            <input
              type="number"
              className="form-control"
              id="matricula-professor"
              value={0}
              placeholder="Matrícula"
              disabled
              required
            />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-6">
            <label htmlFor="matricula-aluno">Nome Completo</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Nome Completo"
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="telefone">Telefone</label>
            <InputMask
              mask={"(99)9 9999-9999"}
              className="form-control"
              id="telefone"
              onChange={(e) => onInputChange(e)}
              placeholder="Telefone"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="telefone">Valor Hora Aula</label>
            <input
              type="number"
              className="form-control"
              id="valorHoraAula"
              onChange={(e) => onInputChange(e)}
              placeholder="Valor da Hora Aula"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-addAluno">
          Registrar Professor
        </button>
        <Link to="/professores" className="btn btn-cancelarAdd">
          Cancelar
        </Link>
      </form>
    </div>
  );
}

export default AddNewProfessor;
