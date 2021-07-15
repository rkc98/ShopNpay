import React from 'react'
import whatimg from '../images/img2.jpeg'
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
                                ShopnPay is a payment option offered by Shopnpay to give you and your customer better experience online.ShopnPay help the shopowner to tranform their bussiness digitally.The main agenda behind the ShopnPay is to allow the shopkeeper to send the payment link to his customer to collect the payment.
                                The main advantage of the ShopnPay is that payment link can also be send to the unregistered customer.Nowadays customers are demanding more choice and better experience than ever before,it pays to have a system in place to give them a straightforward and streamlined checkout.At the very least offering multiple checkout processes will make it easier for customer to buy.
                                The biggest benefit of ShopnPay is that it encourages regular future sales from your most dedicated clients. The easier it is for these people to make payments, the more likely they are to continue buying from your store.

                                </p>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-6'>

                            <img src={whatimg} className='img-responsive' alt='' />{' '}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default What
