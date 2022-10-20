import React, { useState } from 'react'
import styles from './Login.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactComponent as Logo } from '../../Icons/IconPlant.svg'

export default function Login() {
    const notify = (value) => toast.warning(value)
    const [name, setName] = useState('Username')
    const [logoColor, setlogoColor] = useState(`${styles.normalLogo}`)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name.length <= 2) {
            notify("Username is too short")
            setlogoColor(`${styles.warningLogo}`)
        } else {
            localStorage.setItem('username', name)
        }
    }

    const handleFocus = () => {
        if (name === "Username") {
            setName('')
        }
    }

    const handleChange = (value) => {
        setName(value)
    }

    return (
        <>
            <form id={styles.nameContainer} onSubmit={(event) => handleSubmit(event)}>
                <Logo id={styles.logo} className={logoColor} />
                <input
                    type={'text'}
                    id={styles.name}
                    onFocus={() => handleFocus()}
                    onChange={(e) => handleChange(e.target.value)}
                    value={name}>
                </input>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
