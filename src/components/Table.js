import React, {useEffect, useState} from "react";
import '../css/Table.css';


export default function Table(){
    const[entries, setEntries]= useState("")
    const[searchInput, setSearchInput] = useState("")

    //fetch from API
    const statisticsFetcher = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '81777f91e8msh1930fe9291c93c7p1dffd5jsnbbfa65f7f3f6',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };
        
        fetch('https://covid-193.p.rapidapi.com/statistics', options)
                .then(response => response.json())
                .then(entries => setEntries(entries.response))
                .catch(err => console.error(err));
        }

    useEffect(
        statisticsFetcher, []
    )

    // console.log(entries)

    //search bar
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    if (searchInput.length > 0) {
        entries.filter((entry) => {
            return entry.country.match(searchInput)
        })
    }


    return(
        <div className="container">
            <center>
                <div className="search">
                    <input
                        type="search"
                        placeholder="Enter Country Name"
                        onChange={handleChange}
                        value={searchInput}
                    />
                </div>
            
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Countries</th>
                                <th>Total Cases</th>
                                <th>Total Deaths</th>
                                <th>Total Tests</th>
                            </tr>
                        </thead>

                        <tbody>
                            {entries.map(entry => {
                                return(
                                    <tr key={entry.country}>
                                        <td>{entry.country}</td>
                                        <td>{entry.cases.total}</td>
                                        <td>{entry.deaths.total}</td>
                                        <td>{entry.tests.total}</td>
                                    </tr> 
                            )})}
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    )
}