import React from 'react'
import $ from 'jquery'
import { Link, useLocation } from 'react-router-dom'

import Avatar from '../avatar/Avatar'

import getSearch from '../../utils/getSearch'

import './invite.css'

export default function Invite()
{
    const location = useLocation();
    const [ data, setData ] = React.useState({
        type: 'group',
        id: 1,

        name: 'TimeCall',
        avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/anime-avatar-discord-46.jpg',

        users: 19529
    })

    return (
        <section className="_modalbg" style={{display: !getSearch(location.search).invite ? 'none' : 'flex'}}>
            <div className="invite">
                <h1 className="invite-title">
                    Вы были приглашены в {data.type === 'group' ? 'группу' : 'чат'}
                </h1>
                <Avatar img={data.avatar} size="big" />
                <h1 className="invite-name">
                    {data.name}
                    <span>{data.users.toLocaleString()} участников</span>
                </h1>
                <div className="invite-btns">
                    <button className="btn">Принять приглашение</button>
                    <Link to={`${location.pathname}`} className="btn btn-red">Отклонить</Link>
                </div>
            </div>
        </section>
    )
}
