import Axios from "axios";

const baseURL = "http://localhost:8080"

/* Controller de Alunos */

export const getAlunos = async (setAlunos) => {
    const result = await Axios.get(`${baseURL}/alunos`);
    setAlunos(result.data);
}

export const loadAluno = async (setAluno, matricula) => {
    const result = await Axios.get(`${baseURL}/aluno/${matricula}`);
    setAluno(result.data);
}

export const inserirDadosAlunos = async (aluno) => {
    await Axios.post(`${baseURL}/alunos`, aluno);
}

export const atualizarDadosAlunos = async (aluno, matricula) => {
    await Axios.put(`${baseURL}/alunos/${matricula}`, aluno);
}

export const deletarAlunos = async (matricula, setAlunos) => {
    await Axios.delete(`${baseURL}/alunos/${matricula}`);
    getAlunos(setAlunos)
}

/* Controller Turmas*/

export const getTurmas = async (setTurmas) => {
    const result = await Axios.get(`${baseURL}/turmas`)
    setTurmas(result.data)
}

export const loadTurma = async (setTurma, idTurma) => {
    const result = await Axios.get(`${baseURL}/turma/${idTurma}`);
    setTurma(result.data);
}

export const atualizarDadosTurma = async (turma, idTurma) => {
    await Axios.put(`${baseURL}/turmas/${idTurma}`, turma);
}

export const deletarTurmas = async (idTurma, setTurmas) => {
    await Axios.delete(`${baseURL}/turmas/${idTurma}`)
    getTurmas(setTurmas)
}

export const inserirDadosTurmas = async (turma) => {
    await Axios.post(`${baseURL}/turmas`, turma)
}

export const getAlunosByTurma = async (setAlunosTurma, idTurma) => {
    const result = await Axios.get(`${baseURL}/alunos/${idTurma}`)
    setAlunosTurma(result.data)
}

/* Controller Cursos*/

export const getCursos = async (setCursos) => {
    const result = await Axios.get(`${baseURL}/cursos`)
    setCursos(result.data)
}

export const loadCurso = async (setCurso, idCurso) => {
    const result = await Axios.get(`${baseURL}/curso/${idCurso}`)
    setCurso(result.data)
}

export const deletarCurso = async (idCurso, setCursos) => {
    await Axios.delete(`${baseURL}/cursos/${idCurso}`)
    getCursos(setCursos)
}

export const atualizarDadosCurso = async (curso, idCurso) => {
    await Axios.put(`${baseURL}/cursos/${idCurso}`, curso);
}

export const inserirDadosCurso = async(curso) => {
    await Axios.post(`${baseURL}/cursos`, curso)
}

/* Controller Professores*/

export const getProfessor = async (setProfessor) => {
    const result = await Axios.get(`${baseURL}/professores`)
    setProfessor(result.data)
}

export const loadProfessor = async (setProfessor, idProfessor) => {
    const result = await Axios.get(`${baseURL}/professor/${idProfessor}`)
    setProfessor(result.data)
}

export const deletarProfessor = async (idProfessor, setProfessores) => {
    await Axios.delete(`${baseURL}/professores/${idProfessor}`)
    getProfessor(setProfessores)
}

export const inserirDadosProfessor = async (professor) => {
    await Axios.post(`${baseURL}/professores`, professor)
}

export const atualizarDadosProfessor = async (professor, idProfessor) => {
    await Axios.put(`${baseURL}/professores/${idProfessor}`, professor);
}

/* Controller Leads */

export const getLeads = async (setLead) => {
    const result = await Axios.get(`${baseURL}/leads`)
    setLead(result.data)
}

export const deletarLead = async (idLead, setLead) => {
    await Axios.delete(`${baseURL}/leads/${idLead}`);
    getLeads(setLead)
}

export const inserirDadosLead = async (lead) => {
    await Axios.post(`${baseURL}/leads`, lead)
}

export const loadLead = async (setLead, idLead) => {
    const result = await Axios.get(`${baseURL}/lead/${idLead}`);
    setLead(result.data);
}

export const atualizarDadosLead = async (lead, idLead) => {
    await Axios.put(`${baseURL}/leads/${idLead}`, lead);
}