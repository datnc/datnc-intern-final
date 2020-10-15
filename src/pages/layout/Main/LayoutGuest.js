import React from 'react'
import GuestNavbar from '../../../components/Main/Guest/GuestNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <Header />
            <GuestNavbar />
            {children}
            <Footer />
        </div>
    )
}

