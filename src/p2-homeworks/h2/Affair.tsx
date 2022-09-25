import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: { _id: number, name: string, priority: string }
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        return props.deleteAffairCallback(_id)
    }// need to fix

    return (
        <div>
            {props.affair.name}

            <button onClick={() => deleteCallback(props.affair._id)}>x</button>
        </div>
    )
}

export default Affair