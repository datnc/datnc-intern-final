import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-sm-0">
                            <div className="logo">
                                <a href="index.html" /><img src="..\assets\images\logo.png" alt="logo" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-8 text-right pr-0">
                            <div className="header-content-right">
                                <ul className="header-contact">
                                    <li><a href="tel:+1123456789"><i className="bx bxs-phone-call"></i> +1 123 456 789</a></li>
                                    <li><a href="mailto:hello@paso.com"><i className="bx bxs-envelope"></i> hello@paso.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

