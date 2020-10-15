import React, { useState, useEffect } from "react";
import NewsService from "../../../../services/NewsService";
import { Link } from 'react-router-dom';

const News = () => {
    const [newslist, setNewsList] = useState([]);

    const retrieveNews = () => {
        // const params = getRequestParams();
        NewsService.getAll()
            .then((response) => {
                const newslist = response.data;
                setNewsList(newslist);
                // console.log(newslist)
                // let a = localStorage.getItem("a")
                // setCount(Math.ceil(a / pageLimit))
                // setLoading(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    let id = localStorage.getItem("cateid")
    const retrieveNews2 = () => {
        // const params = getRequestParams();

        NewsService.get(id)
            .then((response) => {
                const newslist = response.data;
                setNewsList(newslist);
                console.log(response.data)
                // console.log(newslist)
                // let a = localStorage.getItem("a")
                // setCount(Math.ceil(a / pageLimit))
                // setLoading(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(retrieveNews, []);
    useEffect(retrieveNews2, [id]);

    return (
        <div>
            <section className="home-blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>News</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.</p>
                    </div>

                    <div className="row">
                        {newslist.map(news => (
                            <div className="col-lg-4 col-md-6">

                                <div className="single-blog">

                                    <div className="content" key={news.id}>
                                        <ul>
                                            <li>
                                                {news.created_at}
                                            </li>
                                            <li>
                                                <a>By {news.id_user}</a>
                                            </li>
                                        </ul>
                                        <Link to={"news-detail/" + news.id} onClick={() => localStorage.setItem("newsid", news.id)}>

                                            <h3>{news.title}</h3>

                                        </Link>
                                        <p>{news.new_desc}</p>

                                        <Link to={"news-detail/" + news.id} onClick={() => localStorage.setItem("newsid", news.id)}>Read More</Link>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News

