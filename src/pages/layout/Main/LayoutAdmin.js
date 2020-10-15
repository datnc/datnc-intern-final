import React from 'react'
import AdminNavbar from '../../../components/Main/Admin/AdminNavbar'
import Header from '../../../components/Main/Header'
import Footer from '../../../components/Main/Footer'


export default ({ children }) => {
    return (
        <div>
            <Header />
            <AdminNavbar />
            {children}
            <Footer />
        </div>
    )
}

