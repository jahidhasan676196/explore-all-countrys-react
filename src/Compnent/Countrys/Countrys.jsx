import { useState } from "react";
import Country from "../Country/Country";
import { useEffect } from "react";
import './Countrys.css'

const Countrys = () => {
    const [countrys,setCountrys]=useState([])
    const [countryName,setCountryName]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountrys(data))
    },[])
    const handleClikByAdd=(name)=>{
        const nameOfficial=name.common
        const add=[...countryName,nameOfficial]
        setCountryName(add)
        console.log(name.common)
    }
    return (
        <div>
            {/* add elements */}
            <div>
                <h3>I visited country</h3>
                <ul>
                    {
                        countryName.map(countryn=><li>{countryn}</li>)
                    }
                </ul>
            </div>
            {/* show elements */}
            <div className="countrys-containner">
            {
                countrys.map(country=>
                <Country 
                key='ccn3'
                country={country}
                handleClikByAdd={handleClikByAdd}
                ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;