import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import styles from './Login.module.css'
import 'react-toastify/dist/ReactToastify.css'

import { ReactComponent as Logo } from '../../Icons/IconPlant.svg'

export default function Login() {
    let navigate = useNavigate()
    const notify = (value) => toast.warning(value)
    const [name, setName] = useState('Username')
    const [logoColor, setlogoColor] = useState(`${styles.normalLogo}`)

    /**
     * Checks if the username is long enough.
     * 
     * If username length >= 2 then stores the data in a localStorage under the key username, and redirects to /main.
     * 
     * @param {Event} event 
     */
    const handleSubmit = (event) => {
        event.preventDefault()
        if (name.length <= 2) {
            notify("Username is too short")
            setlogoColor(`${styles.warningLogo}`)
        } else {
            localStorage.setItem('username', name)
            navigate("/main")
        }
    }

    /**
     * Checks the state of name and changes it to '' when its value is 'Username'.
     */
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
