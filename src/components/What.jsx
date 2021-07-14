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
                                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quidem veritatis beatae 
                                    ipsa ex provident est, commodi minus libero in. Libero quaerat dignissimos aspernatur 
                                    praesentium numquam ipsa minus, facere ipsam, fuga eaque eum possimus sapiente obcaecati 
                                    repudiandae nemo at porro animi. Neque repellendus veniam minima dignissimos quae aperiam vero.
                                     Similique?
                                </p>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-6'>

                            <img src={whatimg} className='img-responsive' alt='' style={{height:"400px"}} />{' '}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default What
