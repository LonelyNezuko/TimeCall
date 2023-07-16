import React from 'react'
import $ from 'jquery'

import './inputCode.css'

export default function InputCode({ id, length, widht, callback })
{
    if(length === undefined) length = 5

    function changeInput(elem, i)
    {
        let value = $(elem.target).val()
        value = value.replace(/[^0-9]/g,"")

        if(value.length === parseInt(length)
            && i === 0) {
            $(elem.target).parent().children().each((ii, item) =>
            {
                $(item).val(value[ii])
            })

            $(elem.target).parent().children().last().focus()
            submit($(elem.target).parent())
        }
        else {
            if(value.length >= 2) value = value.slice(1, value.length)
            $(elem.target).val(value)

            if(value.length === 1
                && i < length) $(elem.target).next().focus()

            if(i === length - 1
                && $(elem.target).parent().children().last().val().length > 0) submit($(elem.target).parent())
        }
    }
    function keyDownInput(elem, i)
    {
        if(elem.key === 'Backspace'
            && i !== 0) {
            setTimeout(() => $(elem.target).prev().focus(), 50)
        }
    }

    function submit(parent)
    {
        let code = ``
        parent.children().each((i, item) =>
        {
            code += $(item).val()
        })

        code = parseInt(code)
        callback(code)
    }

    return (
        <div id={id} className="input-code" style={{"width": widht ? widht : parseInt(length) * 50 + 7 * parseInt(length)}}>
            {new Array(parseInt(length)).fill({ value: 0 }).map((item, i) =>
            {
                return (<input onKeyDown={elem => keyDownInput(elem, i)} onChange={elem => changeInput(elem, i)} key={i} type="text" />)
            })}
        </div>
    )
}
