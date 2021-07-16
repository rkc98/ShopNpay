import React from 'react'
import { BsFillPersonLinesFill,BsFileEarmarkText,BsCreditCard,BsFillChatDotsFill,BsArrowRight } from "react-icons/bs"

const Works = () => {
    
    return (
        <>
    <div className="container" style={{width:"90%",marginTop:"40px"}}>
  <div className="row ">
      
    <h2 style={{textAlign:"center" , fontWeight:"bold", marginBottom:"40px"}}>How ShopNpay Works</h2>
    
    <div className="col-md-2" style={{textAlign:'center', fontWeight:"bold"}}>
    <p style={{fontSize:"13px"}}>Register</p>
    <BsFillPersonLinesFill className="iconstyle" />
    <p>Register to get onboard</p>
    </div>
   
    <div className="col-md-1">
      <BsArrowRight className="arrowiconstyle"  />
    </div>
    <div className="col-md-2" style={{textAlign:'center', fontWeight:"bold"}}>
      <p style={{fontSize:"13px"}}>Send payment link</p>
    <BsFillChatDotsFill className="iconstyle" />
    <p>Send payment link to the consumer</p>
    </div>
    <div className="col-md-1">
      <BsArrowRight className="arrowiconstyle" />
    </div>
    <div className="col-md-2" style={{textAlign:'center', fontWeight:"bold"}}>
      <p style={{fontSize:"13px"}}>Multilingual payment mode</p>
    <BsCreditCard className="iconstyle" />
    <p>Receive your payments online through all payment modes</p>
    </div>
    <div className="col-md-1">
      <BsArrowRight className="arrowiconstyle" />
    </div>
    <div className="col-md-2" style={{textAlign:'center', fontWeight:"bold"}}>
      <p style={{fontSize:"13px"}}>Payment dashboard</p>
      <BsFileEarmarkText className="iconstyle" />
      <p>View all your payment receipts in one place</p>
    </div>
    </div>
    </div>


        </>
    )
}

export default Works
