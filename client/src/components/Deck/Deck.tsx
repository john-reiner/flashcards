import React from 'react'

type Props = {
    name: string
}

export default function Deck({name}: Props) {
    return (
        <div>{name}</div>
    )
}