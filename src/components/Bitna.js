import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Bitna(props) {
    let countNum = useSelector(state=>state.countNum)
    return (
        <div>
            <h2>{countNum}</h2>
        </div>
    )
}
