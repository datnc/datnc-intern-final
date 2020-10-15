import React from 'react'
import StudentNavbar from '../../../components/Main/Student/StudentNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <Header />
            <StudentNavbar />
            {children}
            <Footer />
        </div>
    )
}

