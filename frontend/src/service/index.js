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

export const loadTurma = async (setTurma, idTurma) => {
    const result = await Axios.get(`http://localhost:8080/turma/${idTurma}`);
    setTurma(result.data);
}

export const deletarTurmas = async (idTurma, setTurmas) => {
    await Axios.delete(`http://localhost:8080/turma/${idTurma}`)
    getTurmas(setTurmas)
}

export const inserirDadosTurmas = async (turma) => {
    await Axios.post(`http://localhost:8080/add/new_turma/add`, turma)
}

export const getAlunosByTurma = async (setAlunosTurma, idTurma) => {
    const result = await Axios.get(`http://localhost:8080/alunos/pturma/${idTurma}`)
    setAlunosTurma(result.data)
}

/* Controller Cursos*/

export const getCursos = async (setCursos) => {
    const result = await Axios.get("http://localhost:8080/cursos")
    setCursos(result.data)
}

export const getCurso = async (setCurso, idCurso) => {
    const result = await Axios.get(`http://localhost:8080/curso/${idCurso}`)
    setCurso(result.data)
}

export const deletarCurso = async (idCurso, setCursos) => {
    await Axios.delete(`http://localhost:8080/curso/${idCurso}`)
    getCursos(setCursos)
}

/* Controller Professores*/

export const getProfessor = async (setProfessor) => {
    const result = await Axios.get("http://localhost:8080/professores")
    setProfessor(result.data)
}

export const deletarProfessor = async (idProfessor, setProfessores) => {
    await Axios.delete(`http://localhost:8080/professor/${idProfessor}`)
    getProfessor(setProfessores)
}

/* Controller Leads */

export const getLeads = async (setLead) => {
    const result = await Axios.get("http://localhost:8080/lead_alunos")
    setLead(result.data)
}

export const deletarLead = async (idLead, setLead) => {
    await Axios.delete(`http://localhost:8080/lead/${idLead}`);
    getLeads(setLead)
}

export const inserirDadosLead = async (lead) => {
    await Axios.post(`http://localhost:8080/add/new_lead/add`, lead)
}

export const loadLead = async (setLead, idLead) => {
    const result = await Axios.get(`http://localhost:8080/lead/${idLead}`);
    setLead(result.data);
}

export const atualizarDadosLead = async (lead, idLead) => {
    await Axios.put(`http://localhost:8080/lead/${idLead}`, lead);
}