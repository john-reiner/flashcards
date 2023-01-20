import React from 'react'

type Props = {
    front: string,
    back: string
}

export default function Flashcard({front, back}: Props) {
    return (
        <div style={{border: "solid blue 1px"}}>
            <h4>{front}</h4>
            <p></p>
        </div>
    )
}