import React from 'react'
import $ from 'jquery'

import { RiMailSendLine } from 'react-icons/ri'
import { FaRegSmileWink } from 'react-icons/fa'
import { RiAttachment2 } from 'react-icons/ri'

import { AiFillFileAdd } from 'react-icons/ai'

import './messagesInput.css'

export default function MessagesInput({ id })
{
    React.useEffect(() =>
    {
        $('body').on('keyup keydown', '.messagesInput .messagesInput-input textarea', elem =>
        {
            if(elem.type === 'keydown'
                && elem.key === 'Enter'
                && !elem.shiftKey)return elem.preventDefault()

            if((elem.key === 'Enter'
                && elem.shiftKey) || elem.key === 'Backspace')
            {
                if($(elem.currentTarget)[0].scrollHeight < 182) $(elem.currentTarget).outerHeight(38).outerHeight($(elem.currentTarget)[0].scrollHeight);
                if($(elem.currentTarget)[0].scrollHeight == 38) $(elem.currentTarget).outerHeight(38).outerHeight(30);
            }
        })
    }, [])

    const [ attachMenu, setAttachMenu ] = React.useState(false)

    return (
        <div className="messagesInput">
            <div className="messagesInput-wrap">
                <div className="messagesInput-other">
                    <button className="btn-icon btn-icon-transparent">
                        <FaRegSmileWink />
                    </button>
                    <button onClick={() => setAttachMenu(old => !old)} className="btn-icon btn-icon-transparent">
                        <RiAttachment2 />
                        <div className={`messagesInput-attach ${!attachMenu ? '' : 'messagesInput-attach-show'}`}>
                            <div className="messagesInput-attach-wrap">
                                <div className="messagesInput-attach-dropbox">
                                    <AiFillFileAdd />
                                    <h1>Перетащите сюда необходимый файл</h1>
                                </div>
                                <button className="btn">Или выберите файл вручную</button>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="messagesInput-input">
                    <textarea id={id} type="text" rows="1" placeholder="Напишите сообщение, которое хотите отправить..." autoComplete="false" />
                </div>
                <div className="messagesInput-send" style={{display: 'none'}}>
                    <button className="btn-icon btn-icon-transparent">
                        <RiMailSendLine />
                    </button>
                </div>
            </div>
            <div className="messagesInput-attachs">

            </div>
        </div>
    )
}
