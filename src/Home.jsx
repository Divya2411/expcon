import React from 'react';
import web from "../src/images/Image 1.png"
import app from "../src/images/Image 2.png"
import soft from "../src/images/Image 3.png"
import dev from "../src/images/Image 4.png"
import Button from './Button'
import './index.css';
const Home = () => {
    return (
        <>
        <div className = "home">
        <div className = "banner1">
            <img src = {web} alt="..."/>
            <div className = "text-box text-box1">
                <h2>INTERACTIVE CONCERT EXPERIENCE</h2>
                <span className = " line"></span>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <Button/>
            </div>
        </div>
        <div className = "banner2">
            <img src = {app} alt="..."/>
            <div className = "text-box text-box2">
                <h2>INTERACTIVE CONCERT EXPERIENCE</h2>
                <span className = " line"></span>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <Button/>
            </div>
        </div>
        <div className = "banner3">
            <img src = {soft} alt="..."/>
            <div className = "text-box text-box3">
                <h2>INTERACTIVE CONCERT EXPERIENCE</h2>
                <span className = " line"></span>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
               <Button/>
            </div>
        </div>
        <div className = "banner4">
            <img src = {dev} alt="..."/>
            <div className = "text-box text-box4">
                <h2>INTERACTIVE CONCERT EXPERIENCE</h2>
                <span className = " line"></span>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <Button/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;