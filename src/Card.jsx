import React from 'react'

import './index.css'

const Card = (props) => {
    return (
        <>
          <div class="col-lg-4 col-md-4 col-12">
                    <div class="box">
                        <a href="#">
                        </a>
                        <p class="m-4">{props.content}

                        </p>
                        <h1>{props.title}</h1>
                        <h2>{props.position}</h2>
                    </div>
                </div>
        </>
    )
}

export default Card;