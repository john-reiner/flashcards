import React from 'react'
import {ViewType} from '../../../types/appViewTypes'

type Props = {
    name: string
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function Deck({
    name,
    setViewToShow
}: Props) {

    const handleClick = () => {
        setViewToShow("deck")
    }

    return (
        <div 
            style={{border: "solid green 1px", margin: "1em"}}
            onClick={handleClick}
        >
            <h4>{name}</h4>
        </div>
    )
}