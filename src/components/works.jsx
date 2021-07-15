import React from 'react'
import { BsFillPersonLinesFill,BsFillPersonPlusFill,BsCreditCard,BsFillChatDotsFill } from "react-icons/bs"

const Works = () => {
    const iconstyle = { color: "#0066ff", fontSize: "10em" }
    return (
        <>
    <div className="container" style={{marginBottom:"40px",width:"90%"}}>
  <div className="row ">
      
    <h2 style={{textAlign:"center" , fontWeight:"bold", marginBottom:"40px"}}>How ShopNpay Works</h2>
    <div className="backgroundline">
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
    <BsFillPersonLinesFill style={iconstyle} />
    <p>Register</p>
    </div>
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
      <BsFillPersonPlusFill style={iconstyle} />
      <p>Add consumers</p>
    </div>
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
    <BsFillChatDotsFill style={iconstyle} />
    <p>Send payment link</p>
    </div>
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
    <BsCreditCard style={iconstyle} />
    <p>Recieve your payments online</p>
    </div>
    </div>
    </div>
    </div>

        </>
    )
}

export default Works
