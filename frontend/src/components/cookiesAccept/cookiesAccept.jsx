import React from 'react'
import $ from 'jquery'
import Cookies from 'universal-cookie'

import { TbCookie } from 'react-icons/tb'

import './cookiesAccept.css'

export default function CookiesAccept()
{
    const cookies = new Cookies()
    function click()
    {
        cookies.set('cookiesAccept', true)
        $('.cookiesAccept').addClass('cookiesAccept-hide')
    }

    return (
        <section className={`cookiesAccept ${cookies.get('cookiesAccept') !== undefined ? 'cookiesAccept-hide' : ''}`}>
            <div>
                <TbCookie />
                <h1>
                    Тут это...
                    <span>Наш сайт использует Cookie. Это так, чтобы ты знал</span>
                </h1>
            </div>
            <button onClick={click} className="btn">Хорошо</button>
        </section>
    )
}
