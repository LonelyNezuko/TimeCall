import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

import ContextMenu from '../contextMenu/contextMenu'
import Avatar from '../avatar/Avatar'

import { RiListSettingsFill } from 'react-icons/ri';

import { HiChevronDoubleDown } from 'react-icons/hi';
import { HiChevronDoubleUp } from 'react-icons/hi';

import { BiMicrophone } from 'react-icons/bi';
import { BiMicrophoneOff } from 'react-icons/bi';
import { TbHeadphones } from 'react-icons/tb';
import { TbHeadphonesOff } from 'react-icons/tb';
import { ImExit } from 'react-icons/im';

import { RiPushpinFill } from 'react-icons/ri';
import { MdOutlineGroupAdd } from 'react-icons/md';

import './channels.css'

export default function Channels()
{
    const [ account, setAccount ] = React.useState({
        id: 1,
        name: "LonelyNezuko",

        activity: "Не занят",
        avatar: 'https://i.pinimg.com/736x/40/a9/4b/40a94b4c3473de7f425d95c5bbee3708.jpg'
    })


    const [ inChannel, setInChannel ] = React.useState({
        status: true,

        micro: false,
        headphone: true
    })

    const [ dialogs, setDialogs ] = React.useState([
        { id: 4, user: [ 2, "MyAngelNezuko", 'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg' ], lastMessage: [ 2, "Привет, как дела" ], pushpin: true, read: false },
        { id: 2, user: [ 3, "Test User", 'https://pixelbox.ru/wp-content/uploads/2022/06/anime-avatar-telegram-pixelbox.ru-1.jpg' ], lastMessage: [ 1, "Ты тут?" ], pushpin: true, read: true },
        { id: 4, user: [ 6, "TimeCall Bot", 'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg' ], lastMessage: [ 6, "Привет, я бот TimeCall" ], pushpin: false, read: false },
    ])
    const [ groups, setGroups ] = React.useState([
        { id: 1, avatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/anime-avatar-discord-46.jpg', name: "TimeCall", users: [
            'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg',
            'https://pixelbox.ru/wp-content/uploads/2022/06/anime-avatar-telegram-pixelbox.ru-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://pixelbox.ru/wp-content/uploads/2021/03/anime-avatar-discord-46.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg',
            'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg'
        ], unreads: 582, pushpin: true },
        { id: 2, avatar: 'https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-94.jpg', name: "New Channel", users: [], unreads: 0, pushpin: false },
        { id: 3, avatar: 'NC', name: "New Channel", users: [], unreads: 0, pushpin: false },
    ])


    function dialogsContextMenu(event)
    {
        // event.preventDefault()
    }

    return (
        <div className="channels">
            <section className="channels-account">
                <Link to="/account">
                    <Avatar img={account.avatar} status="online" />
                </Link>
                <h1>
                    <Link to="/account">{account.name}</Link>
                    <br />
                    <span>{account.activity}</span>
                </h1>
                <Link to="/settings" className="btn-icon hint" data-hint="Настройки">
                    <RiListSettingsFill />
                </Link>
            </section>
            <section className="channels-settings" style={{display: !inChannel.status ? "none" : ""}}>
                <div className="channels-settings-wrap">
                    <section>
                        <button onClick={() => setInChannel({...inChannel, micro: !inChannel.micro})} className="btn-icon btn-icon-transparent hint" data-hint={!inChannel.micro ? "Включить микро" : "Выключить микро"} style={{"color": !inChannel.micro ? "#f35757" : ""}}>
                            {!inChannel.micro ? <BiMicrophoneOff /> : <BiMicrophone />}
                        </button>
                        <button onClick={() => setInChannel({...inChannel, headphone: !inChannel.headphone})} className="btn-icon btn-icon-transparent hint" data-hint={!inChannel.headphone ? "Включить звук" : "Выключить звук"} style={{"color": !inChannel.headphone ? "#f35757" : ""}}>
                            {!inChannel.headphone ? <TbHeadphonesOff /> : <TbHeadphones />}
                        </button>
                    </section>
                    <button onClick={() => setInChannel({...inChannel, status: !inChannel.status})} className="btn-icon hint btn-icon-transparent" data-hint="Покинуть канал">
                        <ImExit />
                    </button>
                </div>
            </section>
            <section className="channels-wrap">
                <section className="channels-dialogs">
                    <Link className="channels-dialog-title" to="/">Диалоги</Link>
                    <div className="channels-dialogs-wrap">
                        {dialogs.map((item, i) =>
                        {
                            return (<Link onContextMenu={dialogsContextMenu} to={`/?u=${item.id}`} className='dialogs-elem m-menu'>
                                <Link to={`/user?id=${item.user[0]}`}>
                                    <Avatar img={item.user[2]} status="online" />
                                </Link>
                                <h2>
                                    {item.user[1]} {item.pushpin && (<h3><RiPushpinFill /></h3>)}
                                    <span>{item.lastMessage[0] === account.id && (<b>Вы: </b>)}{item.lastMessage[1]}</span>
                                </h2>
                                {!item.read && (<span className="dialogs-elem-new"></span>)}
                            </Link>)
                        })}
                    </div>
                </section>
                <section className="channels-dialogs channels-groups">
                    <h1 className="channels-dialog-title">Группы</h1>
                    <div className="channels-dialogs-wrap">
                        {groups.map((item, i) =>
                        {
                            return (<Link to={`/group?id=${item.id}`} className='dialogs-elem m-menu'>
                                <Avatar img={item.avatar} />
                                <h2>
                                    {item.name} {item.pushpin && (<h3><RiPushpinFill /></h3>)}
                                    <span className={!item.users.length ? "channels-groups-empty" : ""}>
                                        {item.users.length ? item.users.map((u, ui) =>
                                        {
                                            if(ui > 4)return

                                            if(ui > 3 && item.users.length !== 5)return (<div className="avatar avatar-maxmini channels-groups-more">
                                                <div className="avatar-wrap">
                                                    +{item.users.length - 4}
                                                </div>
                                            </div>)
                                            return (<div className="avatar avatar-maxmini">
                                                <div className="avatar-wrap">
                                                    <img src={u} />
                                                </div>
                                            </div>)
                                        }) : 'Пока никого...'}
                                    </span>
                                </h2>
                                <span style={{display: item.unreads ? '' : 'none'}} className="dialogs-elem-new">{item.unreads}</span>
                            </Link>)
                        })}
                    </div>
                    <div className="channels-groups-new">
                        {!groups.length ? (
                            <Link to="#addgroup">
                                У Вас пока нет каналов.
                                <br />
                                <span>Скорее добавьте свой первый канал</span>
                            </Link>
                        ) : (<Link to="#addgroup"><MdOutlineGroupAdd /> Добавить новый канал</Link>)}
                    </div>
                </section>
            </section>
        </div>
    )
}
