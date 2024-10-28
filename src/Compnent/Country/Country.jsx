
import { useState } from 'react';
import './Country.css'
const Country = (props) => {
    const {name ,area,flags}=props.country;
    const {handleClikByAdd}=props
    const [visited,setVisited]=useState(false)
    const handleclick=()=>{
        setVisited(!visited)
    }
    return (
        <div className="country-box">
            <h4>{name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Area:{area}</p>
            <button onClick={()=>handleClikByAdd(name)}>add</button>
            <br />
            <button onClick={handleclick}>{visited?'visited':'Visit'}</button>
            <p>{visited?'I visited the country':'I will visit '}</p>

        </div>
    );
};

export default Country;