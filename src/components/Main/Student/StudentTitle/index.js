import React from 'react'
import { View, Text } from 'react-native'

export default function StudentTitle() {
    return (
        <div>
            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Blog</h2>
                        <ul>
                            <li>
                                <a href="home">
                                    Home
                            </a>
                            </li>
                            <li className="active">My Information</li>
                        </ul>
                    </div>
                </div>
                <div className="page-shape">
                    <div className="shape1">
                        <img src="..\assets\images\shape\1.png" alt="shape" />
                    </div>
                    <div className="shape3">
                        <img src="..\assets\images\shape\3.png" alt="shape" />
                    </div>
                    <div className="shape4">
                        <img src="..\assets\images\shape\4.png" alt="shape" />
                    </div>
                    <div className="shape5">
                        <img src="..\assets\images\shape\5.png" alt="shape" />
                    </div>
                    <div className="shape6">
                        <img src="..\assets\images\shape\6.png" alt="shape" />
                    </div>
                </div>
            </div>
        </div>
    )
}
