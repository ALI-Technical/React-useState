import React from 'react'
import './button.css'

const Button = (props) => {
    return (
        <div className="btnDiv">
            <section>
            <ul>
                <li onClick={props.toggler}>
                    {props.btnName}
                    <span></span><span></span><span></span><span></span>
                </li>
            </ul>
        </section>
        </div>
    )
}

export default Button
