import { useState } from 'react'
import styles from './SingIn.module.css'
import logo from '/logo.svg'


export function SingIn() {
    const [confirmEmail, setconfirmEmail] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const confirm = () => {
        if (!emailRegex.test(userEmail)) {
            setErrorMessage('Invalid email address. Please try again.'); // Показываем ошибку
            return;
        }
        setErrorMessage('');
        setconfirmEmail(false)
    }

    const handleChangePassword = (event) => {
        setUserPassword(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setUserEmail(event.target.value); // Записываем значение из input в state
        setErrorMessage('');
    };
    return (
        <>
            <div className={styles.singIn}>
                <header>
                    <div className={styles.logo}><img src={logo} alt="logo" /></div>
                    <div className={styles.singInHeader}>
                        <p>Secure Login</p>
                        <svg focusable="false" viewBox="2 2 24 24" aria-hidden="true" data-hb-id="pl-icon" class="_1yl7izy0 _1yl7izy1"><path d="M21 9.5h-2.5V9a4.5 4.5 0 00-9 0v.5H7a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h14a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zM10.5 9a3.5 3.5 0 017 0v.5h-7zm10 11.5h-13v-10h13z"></path><path d="M14 12.5a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5z"></path></svg>
                    </div>
                </header>

                {
                    confirmEmail ? <div className={styles.singInMain}>
                        <div className={styles.singIngManiConteiner}>
                            <h2>Enter your email address to sign in or to create an account</h2>
                            <input className={errorMessage !='' ? styles.singIngManiConteinerInp : ""} onChange={handleChangeEmail} type="text" placeholder="Email Address" />
                            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                            <button onClick={confirm} style={{marginTop: "20px"}}>Continue</button>
                        </div>
                    </div>
                        :
                        <div className={styles.singInMain}>
                            <div >
                                <div className={styles.singInMainTitle}>
                                    <h2>Create a Password</h2>
                                    <p>{userEmail}</p>
                                    <a href="">Use a Different Email</a>
                                </div>
                                <div className={styles.singInMainInp}>
                                    <input onChange={handleChangePassword} type={isVisible ? 'text' : 'password'} />
                                    <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>
                                </div>
                                <div className={styles.singIngManiConteiner}>
                                    <button >Create Account</button>
                                </div>
                            </div>
                        </div>
                }
                <footer>
                    <div>
                        <div className={styles.footerPart3Conteiner2}>
                            <a href="https://www.wayfair.com/terms?section=terms-of-use">Terms of Use</a>
                            <a href="https://www.wayfair.com/terms?section=privacy-policy">Privacy Policy</a>
                            <a href="https://www.wayfair.com/privacyrights/dns">Your Privacy Rights & Choices</a>
                        </div>
                        <p>© 2025 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
                    </div>
                </footer>
            </div>

        </>
    )
}

