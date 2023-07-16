import React from 'react'
import $ from 'jquery'

import './avatar.css'

export default function Avatar(props) {
	return (
		<>
			<div className={`avatar
				${props.status ? `avatar-status avatar-status-${props.status}` : ''}
				${props.size && `avatar-${props.size}`}
				${props.classes ? props.classes : ''}`}>
                <div className="avatar-wrap">
                    {props.img ? props.img.length < 4 ? props.img : (<img src={props.img} />) : ''}
                    {props.code ? props.code : ''}
                </div>
                {props.name ? (<h6>{props.name}</h6>) : ''}
            </div>
		</>
	)
}