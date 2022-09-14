import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div>
                <img className={s.userImg} src={props.avatar} alt="image"/>
            </div>
            <div className={s.descWrapper}>
                <div className={s.descName}>{props.name}</div>
                <div className={s.desc}>
                    <p className={s.descMessage}>{props.message}</p>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;
