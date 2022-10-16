import React, { Fragment } from "react";
import Img from '../image/img1.svg'
import Img2 from '../image/Vector.png'
function Card(){
    return(<Fragment>
        <div className="card">
            <div className="t1">Booking<br/> Conformed</div>
            <div className="t2"> Go to home page<br/> for new booking.</div>
            <div className="b-home">
                <a>Home</a>
            </div>
            <div className="vec2">
            <img className="img2" src={Img2}/>
            </div>
            
            <div className="vec">
            
            <img className="img" src={Img}/>
            
            </div>
            
            <div className="box"></div>
        
        </div>
        
       
        
    </Fragment>

    );

}
export default Card;