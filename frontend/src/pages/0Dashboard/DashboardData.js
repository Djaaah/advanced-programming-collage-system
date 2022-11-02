import {useState, useEffect} from 'react'
import {getAlunos, getTurmas, getProfessor, getCursos, getLeads} from "../../service"


export const DashboardData = () => {
    const [qtdMatriculados, setQtdMatriculados] = useState([]);

    const[turmas, setTurmas] = useState([]);

    const [profs, setProfs] = useState([]);

    const [cursos, setCursos] = useState([])

    const [lead, setLead] = useState([]);

    useEffect(() => {
        getLeads(setLead);
        getCursos(setCursos);
        getProfessor(setProfs);
        getTurmas(setTurmas);
        getAlunos(setQtdMatriculados);
    }, [])



    return (
    [
        {
            title: 'Alunos Matriculados',
            data: qtdMatriculados.length,
        },
        {
            title: 'Alunos Prospectados',
            data: lead.length,
        },
        {
            title: 'Professores Registrados',
            data: profs.length,
        },
        {
            title: 'Cursos Registrados',
            data: cursos.length,
        },
        {
            title: 'Turmas Registradas',
            data: turmas.length,
        },

    ]
    )
} 