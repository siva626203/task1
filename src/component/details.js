import { Fragment } from "react";

function Details(){
    return(<Fragment>
        <div className="para">
            <div className="c1"><p ><div className="ct1">Patients name</div>  <br/><div className="ct1">Date & Time</div> <br/><div className="ct1">Service</div><br/><div className="ct1">Address</div></p></div>
            <div className="c2"><p><div className="ct3"><strong>Wayne Barnes</strong></div>  <br/><div className="ct3">12 Nov, 11:00 am</div> <br/><div className="ct3">Dental Braces</div><br/><div className="ct3">Dental Clinic</div><br/><div className="ct2">12/2, Mathura Road, Sector 37,<br/><br/> Faridabad - Delhi</div></p></div>
        </div>
        <div className="done">
            <div className="done-t"><a >DONE</a></div>
            
        </div>
    </Fragment>);
}
export default Details;