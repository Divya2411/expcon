import React from 'react';
import './index.css';
import Card from './Card';
const Pracing = () => {
    return (
        <>
        
        <div className="pricing" id="pricingdiv" >
    <div className="container headings text-center">
        <h1 className="text-center font-weight-bold"> OUR BEST PRICING  </h1></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="card text-center" >
                            <div className="card-header">BASIC</div>
                            <div className="card-body">
                                <li>$<span className="money">9</span>/month</li>
                                <li>Great sound quality</li>
                                <li>Good music library </li>
                                <li>excellent song choices </li>
                                <li>basic amount of visiuals</li>
                            </div>
                          
                            <div className="card-footer">
                                <a href="#"> Purchase</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="card text-center" >
                            <div className="card-header">ADVANCED</div>
                            <div className="card-body">
                                <li>$<span className="money">99</span>/year</li>
                                <li>Amazing sound quality</li>
                                <li>Great music library </li>
                                <li>Even better song choices </li>
                                <li>Amazing visuals</li>
                            </div>
                          
                            <div className="card-footer"><a href="#"> Purchase</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="card text-center" >
                            <div className="card-header">PRO PLAN</div>
                            <div className="card-body">
                                <li>$<span className="money">150</span>/year</li>
                                <li>Incredible sound quality</li>
                                <li>unbelievable music library</li>
                                <li>Crazy good song choices</li>
                                <li>Amazing visuals</li>
                            </div>
                          
                            <div className="card-footer"><a href="#"> Purchase</a></div>
                        </div>
                    </div>
                </div>
            </div>
</div>



<div className="happyclinets" >
    <div className="container headings text-center">
        <h1 className="text-center font-weight-bold">OUR HAPPY CLIENTS</h1>
        <p className="text-capitalize pt-1"> Our satisfied Customer says</p>
    </div>
    <div id="demo" className="carousel slide" data-ride="carousel">

       
      
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <div className="row">
                <Card
                    title = "Britney Spears"
                    position = "artist"
                    content = "Love it, it’s the Best.I can’t live without it!"
                />
                <Card
                    title = "Scooter Braun"
                    position = "Talent Manager"
                    content = "An amazing user experience. I love it"
                />
                <Card
                    title = "DJ Khalid"
                    position = "Producer"
                    content = "This is sick! I'm Obsessed"
                />
                </div>
          
            </div>
          
        </div>
        
        </div>
  
      </div>

    
        </>
    )
}

export default Pracing;