import React, { useEffect, useState } from 'react'
import { getTurmas } from "../../service"

export const TurmasData = () => {

    const [turmas, setTurmas] = useState([])

    useEffect(() => {
        getTurmas(setTurmas)
    }, [])

    return (
        turmas
    )
}

