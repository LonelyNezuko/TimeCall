import React from 'react'
import $ from 'jquery'
import { Link, useLocation } from 'react-router-dom'

import InputCode from '../../components/inputCode/inputCode'

import './authentication.css'

import { MdLogin } from 'react-icons/md'

export default function Authentication()
{
    const location = useLocation()

    const [ signupCode, setSignupCode ] = React.useState(false)

    const [ inputCode, setInputCode ] = React.useState(0)
    function getInputCode(value)
    {
        setInputCode(value)
    }

    return (
        <section className="login">
            <div className="login-wrap" style={{display: location.hash.indexOf("#signup") === -1 && location.hash.indexOf("#forgot") == -1 ? 'block' : 'none'}}>
                <h1>Авторизация</h1>
                <div className="login-inputs">
                    <div className="input">
                        <input id="authenticationLogin" type="text" placeholder=" " name="tclogin" />
                        <label for="authenticationLogin">Логин</label>
                    </div>
                    <div className="input">
                        <input id="authenticationPassword" type="password" placeholder=" " name="tcpassword" />
                        <label for="authenticationPassword">Пароль</label>
                    </div>
                </div>
                <div className="login-other">
                    <div className="input-checkbox">
                        <input id="authenticationRemember" type="checkbox" />
                        <label for="authenticationRemember">Запомнить меня</label>
                    </div>
                    <div className="input-checkbox">
                        <input id="authenticationNotRemember" type="checkbox" />
                        <label for="authenticationNotRemember">Чужой компьютер</label>
                    </div>
                </div>
                <div className="login-btns">
                    <button className="btn btn-100">
                        Войти <MdLogin />
                    </button>
                    <h1 className="login-btns-forgot">
                        <Link to="/authentication#forgot">Забыли пароль?</Link>
                    </h1>
                    <Link to="/authentication#signup" className="btn btn-100">
                        Или нет аккаунта?
                    </Link>
                </div>
            </div>
            <div className="login-wrap" style={{display: location.hash.indexOf("#signup") !== -1 ? 'block' : 'none'}}>
                <h1>Регистрация</h1>
                <h2 style={{display: !signupCode ? 'none' : 'block'}}>Мы отправили на Ваш Email my*********ko@yandex.ru письмо с кодом. Пожалуйста, введите этот код ниже, чтобы продолжить регистрацию</h2>
                <div className="login-inputs" style={{display: signupCode ? 'none' : 'block'}}>
                    <div className="input">
                        <input id="signupEmail" type="text" placeholder=" " name="tcemail" />
                        <label for="signupEmail">Введите свой Email</label>
                    </div>
                    <div className="input">
                        <input id="signupLogin" type="text" placeholder=" " name="tclogin" />
                        <label for="signupLogin">Придумайте логин</label>
                    </div>
                    <div className="input">
                        <input id="signupPassword" type="password" placeholder=" " name="tcpassword" />
                        <label for="signupPassword">Придумайте пароль</label>
                    </div>
                    <div className="input">
                        <input id="signupRePassword" type="password" placeholder=" " name="tcpassword" />
                        <label for="signupRePassword">Повторите пароль</label>
                    </div>
                </div>
                <div className="login-inputs login-inputs-code" style={{display: !signupCode ? 'none' : 'block'}}>
                    <InputCode length="4" widht="250px" callback={getInputCode} />
                </div>
                <div className="login-other" style={{display: signupCode ? 'none' : 'block'}}>
                    <div className="input-checkbox">
                        <input id="signinConfirmDocs" type="checkbox" />
                        <label for="signinConfirmDocs">Я <a href="/authentication#signup">прочитал пользовательское соглашение</a> и подтверждаю его</label>
                    </div>
                    <div className="input-checkbox">
                        <input id="signinComfirmMailing" type="checkbox" />
                        <label for="signinComfirmMailing">Я подписываюсь на рассылку</label>
                    </div>
                </div>
                <div className="login-btns">
                    <button className="btn btn-100" style={{'margin-bottom': '10px'}}>
                        Зарегистрироваться
                    </button>
                    <h1 onClick={() => setSignupCode(false)} className="login-btns-forgot" style={{'margin': '0', 'margin-bottom': '5px', display: !signupCode ? 'none' : 'block'}}>
                        Назад
                    </h1>
                    <h1 className="login-btns-forgot" style={{'margin': '0'}}>
                        <Link to="/authentication">Есть аккаунт? Войдите</Link>
                    </h1>
                </div>
            </div>
            <div className="login-wrap" style={{display: location.hash.indexOf("#forgot") !== -1 ? 'block' : 'none'}}>
                <h1>Сброс пароля</h1>
                <h2>Пожалуйста, введите Email адрес, который Вы вводили при регистрации, чтобы мы выслали письмо с сбросом пароля от аккаунта</h2>
                <div className="login-inputs">
                    <div className="input">
                        <input id="forgotPasswordEmail" type="text" placeholder=" " name="tcemail" />
                        <label for="forgotPasswordEmail">Email</label>
                    </div>
                </div>
                <div className="login-btns" style={{"margin-top": "15px"}}>
                    <button className="btn btn-100" style={{'margin-bottom': '10px'}}>
                        Сбросить пароль
                    </button>
                    <h1 className="login-btns-forgot" style={{'margin': '0'}}>
                        <Link to="/authentication">Вспомнили пароль? Войдите</Link>
                    </h1>
                </div>
            </div>
        </section>
    )
}
