import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Logo from '../../../assets/bookworm_icon.svg';
import './footer.css';
function Footer() {
    return (
        <>
            <section className='footer'>
                <div className='icon'>
                    <img src={Logo} height='60%' alt="Logo" className='animate__animated animate__fadeInUp' />
                </div>

                <ul className='list'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Shop</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                </ul>
                <p className='copyright'>Sang Tran x NashTech @ 2022</p>
            </section>
        </>
    )
}

export default Footer