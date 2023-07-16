import React from 'react'
import $ from 'jquery'
import 'jquery.scrollto'
import { Link, useLocation } from 'react-router-dom'

import getSearch from '../../utils/getSearch'

import MessagesInput from '../../components/messagesInput/messagesInput'
import Messages from '../../components/messages/messages'
import Avatar from '../../components/avatar/Avatar'

import { BiSearchAlt } from 'react-icons/bi'
import { RiPushpinFill } from 'react-icons/ri'
import { MdOutlineLibraryAdd } from 'react-icons/md'

import { TbMessages } from 'react-icons/tb'

import { MdCall } from 'react-icons/md'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

import { RiNewspaperFill } from 'react-icons/ri'

import './dialogs.css'

export default function DialogsPage()
{
    const location = useLocation();

    // Инфа об аккаунте
    const [ account, setAccount ] = React.useState({
        id: 1,
        name: "LonelyNezuko",

        activity: "Не занят",
        avatar: 'https://i.pinimg.com/736x/40/a9/4b/40a94b4c3473de7f425d95c5bbee3708.jpg',

        status: 'online'
    })


    // Диалоги
    const [ dialogs, setDialogs ] = React.useState([
        { id: 4, user: [ 2, "MyAngelNezuko", 'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg', "offline", "Не занят" ], lastMessage: [ 2, "Привет, как дела" ], pushpin: true, read: false, messages: [
            { id: 1, user: [ 1, 'LonelyNezuko', 'https://i.pinimg.com/736x/40/a9/4b/40a94b4c3473de7f425d95c5bbee3708.jpg', 'online' ], text: 'Привет, как твои дела?', read: true, date: Date() },
            { id: 2, user: [ 2, 'MyAngelNezuko', 'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg', 'dnd' ], text: 'Привет, отлично, а твои как?', read: true, date: Date() },
            { id: 2, user: [ 2, 'MyAngelNezuko', 'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg', 'dnd' ], text: 'Держи, вещь - http://localhost:3000/?invite=123 да это точно он', read: true, date: Date() },
            { id: 2, user: [ 2, 'MyAngelNezuko', 'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg', 'dnd' ], text: '[https://localhost:3000/account|Nezu] вот сюда и сюда [http://localhost:3000/account|Пизда] http://localhost:3000/?invite=123 да это', read: true, date: Date() },
            { id: 2, user: [ 2, 'MyAngelNezuko', 'https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg', 'dnd' ], text: ':1: :2: :3:', read: true, date: Date() }
        ] },
        { id: 2, user: [ 3, "Test User", 'https://pixelbox.ru/wp-content/uploads/2022/06/anime-avatar-telegram-pixelbox.ru-1.jpg', "dnd", "Не занят" ], lastMessage: [ 1, "Ты тут?" ], pushpin: true, read: true },
        { id: 5, user: [ 6, "TimeCall Bot", 'https://uprostim.com/wp-content/uploads/2021/02/image183-1-1.jpg', "afk", "Не занят" ], lastMessage: [ 6, "Привет, я бот TimeCall" ], pushpin: false, read: false },
        { id: 6, chat: [ "Test Chat", "https://pixelbox.ru/wp-content/uploads/2021/06/ava-steam-anime-tyan-94.jpg", 18 ], user: [ -1, '', '', '', '' ], lastMessage: [ 1, "Ку, это первый чат", "LonelyNezuko" ], pushpin: false, read: true, messages: [
            { id: 1, user: [ 1, 'LonelyNezuko', 'https://i.pinimg.com/736x/40/a9/4b/40a94b4c3473de7f425d95c5bbee3708.jpg', 'online' ], text: 'Ку, это первый чат', read: true, date: Date() }
        ] }
    ])

    // Для диалогов
    function getDialog()
    {
        if(!getSearch(location.search).u
            && !getSearch(location.search).c)return

        let dialog = undefined
        dialogs.map((item, i) =>
        {
            if(item.user[0] === parseInt(getSearch(location.search).u)
                || item.id === parseInt(getSearch(location.search).c)) dialog = item
        })

        return dialog
    }


    // Поиск по сообщениям
    const [ headerSearch, setHeaderSearch ] = React.useState(false)
    function headerSearchGo()
    {
        if(headerSearch)return

        $('.pageDialogs #pageDialogs-search').val('')
        setHeaderSearch(true)

        setTimeout(() => $('.pageDialogs #pageDialogs-search').focus(), 200)
    }
    React.useEffect(() =>
    {
        $('body').on('focusout keyup input', '.pageDialogs #pageDialogs-search', event =>
        {
            if(event.key === 'Enter'
                || event.type === 'focusout') setHeaderSearch(false)

            if(event.type === 'input')
            {
                const text = $('.pageDialogs #pageDialogs-search').val()
                if(text.length) {
                    $('.pageDialogs .pageDialogs-body .pageDialogs-body-messages .messages .messages-elem').each((i, item) =>
                    {
                        if($(item).find('.messages-elem-text-wrap').text().indexOf(text) !== -1
                            || $(item).find('.messages-elem-text-name').text().indexOf(text) !== -1)
                        {
                            $('.pageDialogs .pageDialogs-body .pageDialogs-body-messages .messages').scrollTo(item)
                        }
                    })
                }
            }
        })
    }, [])


    // Поиск по диалогам
    function searchDialog(text)
    {
        if(!text.length) $('.pageDialogs .pageDialogs-list-wrap .dialogs-elem').show()
        else {
            $('.pageDialogs .pageDialogs-list-wrap .dialogs-elem').each((i, item) =>
            {
                if($(item).attr('data-username').indexOf(text) === -1) $(item).hide()
            })
        }
    }

    // Отправка сообщения
    React.useEffect(() =>
    {
        $('body').on('keyup', '.pageDialogs .pageDialogs-body .pageDialogs-body-input .messagesInput #pageDialogsInput', event =>
        {
            if(event.key !== 'Enter')return

            event.preventDefault()
            enterInput()
        })
    }, [])
    function enterInput()
    {
        const text = $('.pageDialogs .pageDialogs-body .pageDialogs-body-input .messagesInput #pageDialogsInput').val().trim()
        if(!text.length)return

        // setDialogMessages(old => [ ...old, { id: account.id, user: [ account.id, account.name, account.avatar, account.status ], text: text, read: false, date: Date() } ])
        $('.pageDialogs .pageDialogs-body .pageDialogs-body-input .messagesInput #pageDialogsInput').val('')
    }

    return (
        <section className="pageDialogs">
            <div className="pageDialogs-list">
                <div className="input-icon pageDialogs-search">
                    <BiSearchAlt />
                    <input onChange={e => searchDialog(e.target.value)} type="text" name="tcsearch" placeholder="Поиск..." />
                </div>
                <h1 className="pageDialogs-list-title">
                    <Link to="/">Диалоги</Link>
                    <Link to={`${location.pathname}${location.search}#newDialog`} className="btn-icon hint" data-hint="Начать переписку">
                        <MdOutlineLibraryAdd />
                    </Link>
                </h1>
                <div className="pageDialogs-list-wrap">
                    {dialogs.map((item, i) =>
                    {
                        return (<Link to={`/?${item.chat ? 'c' : 'u'}=${item.chat ? item.id : item.user[0]}`} className={`dialogs-elem m-menu ${parseInt(getSearch(location.search).u) === item.user[0] || parseInt(getSearch(location.search).c) === item.id ? 'dialogs-elem-select' : ''}`} data-username={item.chat ? item.chat[0] : item.user[1]}>
                            {item.chat ? (
                                <Avatar img={item.chat[1]} />
                            ) : (
                                <Link to={`/user?id=${item.user[0]}`}>
                                    <Avatar img={item.user[2]} staatus={item.user[3]} />
                                </Link>
                            )}
                            <h2>
                                {item.chat ? item.chat[0] : item.user[1]} {item.pushpin && (<h3><RiPushpinFill /></h3>)}
                                <span>{item.lastMessage[0] === account.id ? (<b>Вы: </b>) : item.chat ? (<b>{item.lastMessage[2]}: </b>) : ''}{item.lastMessage[1]}</span>
                            </h2>
                            {!item.read && (<span className="dialogs-elem-new"></span>)}
                        </Link>)
                    })}
                </div>
            </div>
            <div className="pageDialogs-body">
                <div className="pageDialogs-body-wrap" style={{display: !getSearch(location.search).u && !getSearch(location.search).c ? 'none' : 'block'}}>
                    <div className="pageDialogs-body-header">
                        <div className="pageDialogs-body-header-title">
                            <TbMessages />
                            <Avatar img={!getDialog() ? ''
                                        : getDialog().chat ? getDialog().chat[1] : getDialog().user[2]} status={!getDialog() ? null : getDialog().chat ? null : 'online'} />
                            <h1>
                                {!getDialog() ? '' : getDialog().chat ? getDialog().chat[0] : getDialog().user[1]}
                                <br />
                                {!getDialog() ? '' : !getDialog().chat ? (<span>{getDialog().user[4]}</span>) : (<span>{getDialog().chat[2]} участников</span>)}
                            </h1>
                        </div>
                        <div className="pageDialogs-body-header-right">
                            <button className="btn-icon">
                                <MdCall />
                            </button>
                            <button className="btn-icon">
                                <BsFillCameraVideoFill />
                            </button>
                            <button onClick={() => headerSearchGo()} className={`btn-icon ${headerSearch ? 'pageDialogs-body-header-search' : ''}`}>
                                <input type="text" id="pageDialogs-search" placeholder="Что ищем?" />
                                <BiSearchAlt />
                            </button>
                            <button className="btn-icon">
                                <GiHamburgerMenu />
                            </button>
                        </div>
                    </div>
                    <div className="pageDialogs-body-messages">
                        <Messages data={!getDialog() ? [] : getDialog().messages} account={account} group={!getDialog() ? '' : !getDialog().chat ? false : true} />
                    </div>
                    <div className="pageDialogs-body-input">
                        <MessagesInput id='pageDialogsInput' />
                    </div>
                </div>
                <div className="pageDialogs-body-wrap" style={{display: getSearch(location.search).u || getSearch(location.search).c ? 'none' : 'block'}}>
                    <div className="pageDialogs-body-new">
                        <RiNewspaperFill />
                        <h1>
                            Выберите чат
                            <br />
                            или
                        </h1>
                        <Link to="#newDialog" className="btn">создайте новый</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
