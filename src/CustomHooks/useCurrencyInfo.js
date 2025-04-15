// these hooks in most of the cases retur js so, filename is js not jsx

//Custom hook

import {useEffect,useState} from "react";
function useCurrencyInfo(currency){
    const[data,setdata]=useState({});
    useEffect (()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())  // Converts the response into JSON format.
        .then((res)=>setdata(res[currency])) //  Extracts the currency data and updates data
        console.log(data);
    },[currency]) //  Runs when "currency" changes
    console.log(data);
    return data; // makes the currency data available to any component that uses this hook. 
}

export default useCurrencyInfo;