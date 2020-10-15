import React from 'react'
import PrincipalNavbar from '../../../components/Main/Principal/PrincipalNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <Header />
            <PrincipalNavbar />
            {children}
            <Footer />
        </div>
    )
}

