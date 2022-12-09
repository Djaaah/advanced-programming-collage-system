import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { loadProfessor, atualizarDadosProfessor } from "../../service";

function EditProfessor() {

  let navigate = useNavigate();

  const { idProfessor } = useParams();

  const onInputChange = (e) => {
    setProfessor({ ...professor, [e.target.id]: e.target.value });
  }; 

  const [professor, setProfessor] = useState({
    nome: "",
    valorHoraAula: "",
    telefone: ""
  });

  const onSubmit = () => {
    atualizarDadosProfessor(professor, idProfessor);
    navigate('/professores');
}

  useEffect(() => {
    loadProfessor(setProfessor, idProfessor);
  }, []);

  return (
    <div className="conteudo">
      <h1 className="page-title">Editar Professor</h1>
      <hr className="dashline" />
      
      <form onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-3">
          <label htmlFor="matricula-aluno">ID do Professor</label>
          <input
            type="number"
            className="form-control"
            id="idProfessor"
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
            id="nome"
            value={professor.nome}
            placeholder="Nome Completo"
            onChange={(e) => onInputChange(e)}
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
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="col">
          <label htmlFor="telefone">Valor Hora Aula</label>
          <input
            className="form-control"
            id="valorHoraAula"
            value={professor.valorHoraAula}
            placeholder="Telefone"
            required
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-addAluno">Atualizar Professor</button>
      <Link to="/professores" className="btn btn-cancelarAdd">
        Voltar
      </Link>
      </form>
    </div>
  );
}

export default EditProfessor;
