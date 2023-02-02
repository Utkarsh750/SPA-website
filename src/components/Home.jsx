import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube , AiFillInstagram} from "react-icons/ai";

export const Home = () => {
  return (
   <>
    <div className="home" id='home'>
        <main>
            <h1>TechSolver</h1>
            <p>Solutions of all your Problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Possimus, ratione culpa. Repellat velit dolores odit a voluptate nulla optio.
             sunt corrupti voluptatum, nobis porro quisquam beatae incidunt, quos maxime fugiat.</p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta, at aut provident.
             assumenda quisquam nulla enim accusantium voluptas numquam doloribus quae aspernatur.
             laudantium veniam neque, ab omnis, necessitatibus quos error odit excepturi! Porro ad soluta cumque labore! Nihil distinctio ullam expedita tenetur hic aliquid.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{ animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{ animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{ animationDelay: "0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{ animationDelay: "1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
   </>

  )
}
