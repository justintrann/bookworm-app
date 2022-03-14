import React, { Component, useEffect, useState } from 'react';
import './home.css';
import Navbar from '../../components/Navbar/MyNavbar';
import Carousel from '../../components/Carousel/Carousel';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Feature from '../../components/FeatureHome/Feature'
import Footer from '../../components/Footer/Footer';

function Home() {
    const [state, setState] = useState({
        listOnsale: [],
        listFeature: [],
        currentFeature: "recommend",
    });

    useEffect(async () => {
        const resOnsale = await axios.get("/api/books/onsale");
        const resRecommend = await axios.get("/api/books/recommend");
        setState({ listOnsale: resOnsale.data.data, listFeature: resRecommend.data.data, currentFeature: "recommend" })
    }, [])

    const renderCarouselItem = (list = []) => {
        return list.map((item) => {
            if (item.book_cover_photo === null) {
                item.book_cover_photo = "booknull";
            }
            return <>
                <div className="card">
                    <img src={`/assets/bookcover/${item.book_cover_photo}.jpg`} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.book_title}</h5>
                        <p className="card-text">{item.author_info.author_name}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><b>{item.final_price}$</b></small>
                    </div>
                </div>
            </>
        })
    }

    const handleFeature = async (type) => {
        if (type === "recommend") {
            const res = await axios.get("/api/books/recommend");
            setState({ ...state, listFeature: res.data.data, currentFeature: "recommend" });
            return;
        }
        if (type === "popular") {
            const res = await axios.get("/api/books/popular");
            setState({ ...state, listFeature: res.data.data, currentFeature: "popular" });
            return;
        }

    }

    return (
        <div className="home">
            <Navbar />

            <Container>
                <div className="headerCarousel">
                    <h2 className="title">Onsale</h2>
                    <div>View All</div>
                </div>
                <Carousel show={4}>
                    {renderCarouselItem(state.listOnsale)}
                </Carousel>
            </Container >

            <Container>
                <div className="headerFeature">
                    <h2 className="title">Feature</h2>
                    <div>
                        <Button variant={state.currentFeature === "recommend" ? "success" : "light"} onClick={() => handleFeature("recommend")}>Recommend</Button>{' '}
                        <Button variant={state.currentFeature === "popular" ? "success" : "light"} onClick={() => handleFeature("popular")} >Popular</Button>{' '}
                    </div>
                </div>
                <Feature list={state.listFeature} />
            </Container >

            <Footer />
        </div >
    );
}

export default Home;