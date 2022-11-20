import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import '../css/Table.css';

export default function Table(){
    const [country, setCountry] = useState("")
    const [cases, setCases] = useState("")
    const [deaths, setDeaths] = useState("")
    const [tests, setTests] = useState("")


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '81777f91e8msh1930fe9291c93c7p1dffd5jsnbbfa65f7f3f6',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    const statisticsFetcher = () => {
        fetch('https://covid-193.p.rapidapi.com/statistics', options)
            .then(response => response.json())
            .then(response => {
                setCountry(response.country)
                setCases(response.cases)
                setDeaths(response.deaths)
                setTests(response.tests)
            })
            .catch(err => console.error(err));
        }

        useEffect(
            statisticsFetcher, []
        )

    return(
        <div className="container">
            <center>
                <h1>This is a Table</h1>
                <table>
                    <tr>
                        <th>Countries</th>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                        <th>Total Tests</th>
                    </tr>
                    
                </table>
            </center>
        </div>
    )
}