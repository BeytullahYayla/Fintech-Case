import { useEffect, useState } from "react";
import CountriesService from "../services/CountryService,";
import {Table,Menu,Icon,Image, Search, Input} from 'semantic-ui-react'
import React from "react";
import 'semantic-ui-css/semantic.min.css'
import CountryService from "../services/CountryService,";
export default function CountryList(){
    const[countries,setCountries]=useState([])
    const[query,setQuery]=useState("")

    const search=(data)=>{
      return data.filter((item)=>item.name.toLowerCase().includes(query))
    }
    useEffect(() => {
      let countryService=new CountryService()
      
      countryService.getCountries().then(result=>setCountries(search(result.data)))
    
      
    })
    

return (

<div>


<div class="input-group">

  <div class="form-outline">
   
    <input type="search" id="form1" class="form-control" onChange={(e)=>setQuery(e.target.value.toLowerCase())} placeholder="The name of country" />
   
  </div>
  
</div>


<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Flag</th>
      <th scope="col">Name</th>
      <th scope="col">Capital</th>
      <th scope="col">Region</th>
    </tr>
  </thead>
  <tbody>
    {
      countries.map(
        countries=> <tr>
        <th scope="row"><img src={countries.flags.svg} height="100" width='200'></img></th>
        <td>{countries.name}</td>
        <td>{countries.capital}</td>
        <td>{countries.region}</td>
      </tr>
      )
    }
  </tbody>
</table>
</div>

)

}