import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Box(props) {
    const dispatch = useDispatch();
    const background = useSelector(state => state.background);
    const singleColor = useSelector(state => state.boxes[props.id]);

    const handleChange = e => {
        dispatch({
            type: "SINGLE_COLOR",
            payload: { id: props.id, singleColor: e }
        });
    };
    return (
        <div
            style={{
                backgroundColor: singleColor === "" ? background : singleColor,
                width:200,
                height: 200,
                margin: 10,
                textAlign: 'center'
            }}>
            Colorful Box
      <input type="text" onChange={e => handleChange(e.target.value)}></input>
        </div>
    );
}