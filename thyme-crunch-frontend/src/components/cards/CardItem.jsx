import React from 'react';
import './Cards.css';

export default function CardItem(props) {
    return (
        <>           
            <div className="bigDivAll">
                <a className="hov" href={props.path}>
                    <div className="submainAll" style={{ backgroundImage: `url(${props.src})` }} >
                        <div id="bottom">{props.label}</div>
                    </div>
                </a>
                
                <div className="pdiv">
                    <h2 id="h2p">{props.text}</h2>
                </div>
            </div>       
        </>
    )
}