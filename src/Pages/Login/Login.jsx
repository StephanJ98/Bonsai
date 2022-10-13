import React, { useState } from 'react'
import styles from './Login.module.css'

export default function Login() {
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(name)
    }

    const handleChange = (value) => {
        setName(value)
    }

    return (
        <form id={styles.nameContainer} onSubmit={(event) => handleSubmit(event)}>
            <input type={'text'} id={styles.name} onChange={(e) => handleChange(e.target.value)} value={name}></input>
        </form>
    )
}
