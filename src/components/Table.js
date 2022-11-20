import React, {useEffect, useState} from "react";
import '../css/Table.css';


export default function Table(){
    const[entries, setEntries]= useState("")

    //fetch from API
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
            .then(response => setEntries(response.response))
            .catch(err => console.error(err));
        }

        useEffect(
            statisticsFetcher, []
        )


    return(
        <div className="container">
            <center>
                <h1>This is a Table</h1>
                <div className="table">
                    <table>
                            <tr>
                                <th>Countries</th>
                                <th>Total Cases</th>
                                <th>Total Deaths</th>
                                <th>Total Tests</th>
                            </tr>
                            {entries.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.country}</td>
                                        <td>{val.cases.total}</td>
                                        <td>{val.deaths.total}</td>
                                        <td>{val.tests.total}</td>
                                    </tr>
                                )
                            })}
                        </table>
                </div>
            </center>
        </div>
    )
}