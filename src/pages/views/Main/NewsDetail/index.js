import React, { useState, useEffect } from "react";
import NewsService from "../../../../services/NewsService";

export default function NewsDetail() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        retrieveNews();
    }, []);


    const retrieveNews = async () => {
        try {
            let id = localStorage.getItem("newsid");

            const data = NewsService.gett(id);
            setNews((await data).data);
            console.log(news)
        } catch (error) {
            console.log('Khong the ket noi API ', error)
        }
    }

    return (
        <div>
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services-details-text">
                                <h2>{news.title}</h2>
                                <p>{news.content}</p>
                                <p>By {news.id_user} on {news.created_at}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
