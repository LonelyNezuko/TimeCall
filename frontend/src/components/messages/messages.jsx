import React from 'react'
import $ from 'jquery'
import 'jquery.scrollto'
import Moment from 'moment'
import { Link, useLocation } from 'react-router-dom'
import JSXParser from 'react-jsx-parser'

import Avatar from '../avatar/Avatar'

import formatText from '../../utils/formatText'

import { MdOutlineMarkChatRead } from 'react-icons/md'
import { GiPartyPopper } from 'react-icons/gi'

import './messages.css'

export default function Messages({ key, data, account, group })
{
    const location = useLocation()

    Moment.locale('ru')
    React.useEffect(() =>
    {
        $('.messages').scrollTo($('.messages .messages-elem:last-child'))
    }, [ data ])

    if(data === undefined)return

    return (
        <div className="messages">
            {data.map((item, i) =>
            {
                return (<div key={i} className={`messages-elem ${item.user[0] === account.id ? 'messages-elem-right' : ''}`}>
                    <div className="messages-elem-avatar">
                        <Avatar img={item.user[2]} status={item.user[3]} size={'mini'} />
                    </div>
                    <div className="messages-elem-text">
                        <div className="messages-elem-text-wrap">
                            <span dangerouslySetInnerHTML={{__html: formatText(item.text).text}}></span>
                            {formatText(item.text).format.urls.map((item, i) =>
                            {
                                if(new URL(item).origin !== window.location.origin
                                    || new URL(item).search.indexOf('?invite=') === -1)return

                                return (<div key={i} className="messages-elem-text-other">
                                    <a target="_blank" href={item} className="btn btn-reverse">
                                        <GiPartyPopper />
                                        Открыть приглашение
                                    </a>
                                </div>)
                            })}
                        </div>
                        <div className="messages-elem-text-date">
                            <h1>{Moment(item.date).fromNow()}</h1>
                            {item.read && (<MdOutlineMarkChatRead />)}
                            {group && (<h1 className="messages-elem-text-name">{item.user[1]}</h1>)}
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}
