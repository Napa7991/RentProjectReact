import React from 'react';
import"./Style.css"

const Card = () => {
    return (
        <>
            <div className="container">
                <div className="Upper">
                    <h3>Dream House:</h3>
                    <h3>Find Yours</h3>
                    <div className='input'>
                        <label htmlFor="/">Location</label>
                        <br />
                        <input type="text" placeholder='Everywhere' className='inp' />
                        <div className="btn">icon</div>
                    </div>
                </div>
                <div className="middle">

                </div>
                    
                <div className="lower">
                </div>
            </div>
        </>
    )
}

export default Card
