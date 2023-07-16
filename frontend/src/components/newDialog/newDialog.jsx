import React from 'react'
import $ from 'jquery'
import { Link, useLocation } from 'react-router-dom'

import Avatar from '../avatar/Avatar'

import { MdClose } from 'react-icons/md'
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai'

import { AiOutlineUpload } from 'react-icons/ai'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import './newDialog.css'

export default function NewDialog()
{
    const location = useLocation();

    return (
        <section className="_modalbg" style={{display: location.hash.indexOf('#newDialog') === -1 ? 'none' : 'flex'}}>
            <div className="newDialog">
                <div className="newDialog-header">
                    <h1>Создание нового чата</h1>
                    <Link to={`${location.pathname}${location.search}${location.hash.replace('#newDialog', '')}`} className="btn-icon btn-icon-transparent">
                        <MdClose />
                    </Link>
                </div>
                <div className="newDialog-body">
                    <div className="newDialog-body-elem">
                        <h1 className="newDialog-body-elem-title">
                            Пользователи чата
                            <span>3 / 20</span>
                        </h1>
                        <div className="newDialog-body-elem-wrap">
                            <div className="newDialog-body-users">
                                <Avatar img='https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg' code={
                                        (<div>
                                            <AiOutlineUserDelete />
                                        </div>)
                                    } />
                                <Avatar img='https://i.pinimg.com/originals/77/66/0f/77660fbdd854e99d2ccacb12e2c71e2b.jpg' code={
                                        (<div>
                                            <AiOutlineUserDelete />
                                        </div>)
                                    } />
                                <Avatar classes='newDialog-body-users-add' code={
                                        (<AiOutlineUserAdd />)
                                    } />
                            </div>
                        </div>
                    </div>
                    <div className="newDialog-body-elem">
                        <h1 className="newDialog-body-elem-title">
                            Аватар
                        </h1>
                        <div className="newDialog-body-elem-wrap">
                            <div className="newDialog-body-avatar">
                                <Avatar img="НД" size="big" />
                                <div className="newDialog-body-avatar-settings">
                                    <button className="btn btn-reverse btn-red">
                                        <MdOutlineDeleteOutline />
                                        <span>Удалить</span>
                                    </button>
                                    <button className="btn btn-reverse">
                                        <AiOutlineUpload />
                                        <span>Загрузить</span>
                                    </button>
                                    <div className="input input-labelup">
                                        <input id="newDialogAvatarURL" type="text" name="tcnewdialogavatarurl" placeholder=" " />
                                        <label for="newDialogAvatarURL">Или укажите ссылку на изображение</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newDialog-body-elem">
                        <h1 className="newDialog-body-elem-title">
                            Название
                        </h1>
                        <div className="newDialog-body-elem-wrap">
                            <div className="input">
                                <input id="newDialogName" type="text" name="tcnewdialogname" placeholder=" " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newDialog-btns">
                    <button className="btn">Создать чат</button>
                    <Link to={`${location.pathname}${location.search}${location.hash.replace('#newDialog', '')}`} className="btn btn-red">Отмена</Link>
                </div>
            </div>
        </section>
    )
}
