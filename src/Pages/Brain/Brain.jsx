import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Brain() {
    const [name, setName] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        setName(localStorage.getItem('username'))
        if (name !== null) {
            navigate('/main')
        } else {
            navigate('/login')
        }
    }, [name])


    return (
        <>
            {name === null && <p>Loading</p>}
        </>
    )
}
