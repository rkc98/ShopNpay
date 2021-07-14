import React from 'react'
import whatimg from '../images/what.jpg'
const What = () => {
    return (
        <>
            <div id='about'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-xs-12 col-md-6'>
                            <div className='about-text'>
                                <h2>What is ShopNpay</h2>
                                {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
                                <p>
                                    ShopNPay is payment option offered by ShopNpay to give you and your customers a better experience online. Now that customers are demanding more choice and better experiences than ever before, it pays to have a system in place to give them a straightforward and streamlined checkout. At the very least, offering multiple checkout processes will make it easier for customers to buy.
                                    The biggest benefit of ShopnPay is that it encourages regular future sales from your most dedicated clients. The easier it is for these people to make payments, the more likely they are to continue buying from your store. Because of that, and the incredible security that’s built into the service, there’s really no downside to using ShopNPay.

                                </p>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-6'>

                            <img src={whatimg} className='img-responsive' alt='' style={{ height: "400px" }} />{' '}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default What
