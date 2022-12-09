import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InputMask from "react-input-mask";
import { loadProfessor } from "../../service";

function ViewProfessor() {
  const { idProfessor } = useParams();

  const [professor, setProfessor] = useState([]);

  useEffect(() => {
    loadProfessor(setProfessor, idProfessor);
    console.log(professor.nome);
  }, []);

  return (
    <div className="conteudo">
      <h1 className="page-title">Visualizar Professor</h1>
      <hr className="dashline" />

      <div className="row">
        <div className="col-3">
          <label htmlFor="matricula-aluno">ID do Professor</label>
          <input
            type="number"
            className="form-control"
            id="id-professor"
            value={professor.idProfessor}
            placeholder="Matrícula"
            disabled
            required
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <label htmlFor="matricula-aluno">Nome Completo</label>
          <input
            type="text"
            className="form-control"
            id="professor-nome"
            value={professor.nome}
            placeholder="Nome Completo"
            disabled
            required
          />
        </div>
        <div className="col-2">
          <label htmlFor="telefone">Telefone</label>
          <InputMask
            mask={"(99)9 9999-9999"}
            className="form-control"
            id="telefone"
            value={professor.telefone}
            placeholder="Telefone"
            required
            disabled
          />
        </div>
        <div className="col">
          <label htmlFor="telefone">Valor Hora Aula</label>
          <input
            className="form-control"
            id="telefone"
            value={professor.valorHoraAula}
            placeholder="Telefone"
            required
            disabled
          />
        </div>
      </div>

      <Link to="/professores" className="btn btn-cancelarAdd">
        Voltar
      </Link>
    </div>
  );
}

export default ViewProfessor;
