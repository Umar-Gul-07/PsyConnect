import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({ children }) {

    return (
        <>
            <div className='page'>
                <Header />
                <div className='site-main'>
                    {children}
                </div>
                <Footer />
                <a id="totop" href="#top" className="" style={{ display: "none" }}>
                    <i className="fa fa-angle-up" />
                </a>

            </div>
        </>
    )
}

export default Base