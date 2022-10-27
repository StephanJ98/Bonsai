import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'


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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])


    return (
        <>
            {name === null && <Spinner />}
        </>
    )
}
