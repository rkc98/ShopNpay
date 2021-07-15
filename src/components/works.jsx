import React from 'react'
import { BsFillPersonLinesFill,BsFillPersonPlusFill,BsCreditCard,BsFillChatDotsFill } from "react-icons/bs"

const Works = () => {
    
    return (
        <>
    <div className="container" style={{marginBottom:"40px",width:"90%"}}>
  <div className="row ">
      
    <h2 style={{textAlign:"center" , fontWeight:"bold", marginBottom:"40px"}}>How ShopNpay Works</h2>
    <div className="backgroundline">
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
    <BsFillPersonLinesFill className="iconstyle" />
    <p>Register</p>
    </div>
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
      <BsFillPersonPlusFill className="iconstyle" />
      <p>Add consumers</p>
    </div>
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
    <BsFillChatDotsFill className="iconstyle" />
    <p>Send payment link</p>
    </div>
    <div className="col-md-3" style={{textAlign:'center', fontWeight:"bold"}}>
    <BsCreditCard className="iconstyle" />
    <p>Recieve your payments online</p>
    </div>
    </div>
    </div>
    </div>

        </>
    )
}

export default Works
