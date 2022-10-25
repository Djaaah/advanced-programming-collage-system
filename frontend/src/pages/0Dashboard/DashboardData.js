import { useState, useEffect } from 'react'
import { getAlunos } from "../../service"

export const DashboardData = () => {
    const [qtdMatriculados, setQtdMatriculados] = useState([]);

    useEffect(() => {
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
                data: '5',
            },
            {
                title: 'Professores Registrados',
                data: '7',
            },
            {
                title: 'Cursos Registrados',
                data: '1',
            },
            {
                title: 'Turmas Registradas',
                data: '7',
            }
        ]
    )
} 