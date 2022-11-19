import React from "react";
import '../css/Home.css';

export default function Home(){

    return(
        <div className="container">
            <div className="center">
                <p className="intro">Welcome to Cyhealth's Covid-19 Analysis System.</p>
                <p>This system is required by Cyhealth's insurance partner for research purposes.</p>
                <p>This is system comprises of two analyses;</p>
                <ul>
                    <li>A statistics table displaying Covid-19 statistics by country</li>
                    <li>An hourly graph showing Covid-19 history</li>
                </ul>
            </div>
        </div>
    )
}