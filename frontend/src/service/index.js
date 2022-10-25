import Axios from "axios";

/* Controller de Alunos */

export const getAlunos = async (setAlunos) => {
    const result = await Axios.get("http://localhost:8080/alunos");
    setAlunos(result.data);
}

export const loadAluno = async (setAluno, matricula) => {
    const result = await Axios.get(`http://localhost:8080/alunos/${matricula}`);
    setAluno(result.data);
}

export const inserirDadosAlunos = async (aluno) => {
    await Axios.post("http://localhost:8080/add/new_aluno/add", aluno);
}

export const atualizarDadosAlunos = async (aluno, matricula) => {
    await Axios.put(`http://localhost:8080/alunos/${matricula}`, aluno);
}

export const deletarAlunos = async (matricula, setAlunos) => {
    await Axios.delete(`http://localhost:8080/alunos/${matricula}`);
    getAlunos(setAlunos)
}

/* Controller Turmas*/

export const getTurmas = async (setTurmas) => {
    const result = await Axios.get("http://localhost:8080/turmas")
    setTurmas(result.data)
}