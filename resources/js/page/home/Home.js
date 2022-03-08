import React, { Component, useEffect, useState } from 'react';
import './home.css';
import Navbar from '../../components/Navbar/MyNavbar';
import Carousel from '../../components/Carousel/Carousel';
import axios from 'axios';

function Home() {
    const [state, setState] = useState({
        listBook: [],
    });

    useEffect(async () => {
        const res = await axios.get("/api/books/onsale");
        setState({ listBook: res.data })
    }, [])

    const renderCarouselItem = (list = []) => {
        return list.map((item) => {
            if (item.book_cover_photo === null) {
                item.book_cover_photo = "book1";
            }
            return <div>
                <div style={{ padding: 8, display: "flex", flexDirection: "column" }}>
                    <img src={`/assets/bookcover/${item.book_cover_photo}.jpg`} alt="placeholder" style={{ width: '80%' }} />
                    <a>{item.book_title}</a>
                </div>
            </div>
        })
    }

    return (
        <div className="home">
            <Navbar />
            <div style={{ maxWidth: 1400, marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                <p><b>On Sale</b></p>
                <Carousel show={4}>
                    {renderCarouselItem(state.listBook)}
                </Carousel>
            </div>


            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                <p><b>Featured Books</b></p>
                <Carousel show={4}>
                    {renderCarouselItem(state.listBook)}
                </Carousel>
            </div>

        </div>
    );
}


export default Home;