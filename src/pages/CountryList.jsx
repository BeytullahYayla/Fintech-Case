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

      
<Table celled>
<Table.Header>
 <Table.Row>
   <Table.HeaderCell>Flag</Table.HeaderCell>
   <Table.HeaderCell>Name</Table.HeaderCell>
   <Table.HeaderCell>Capital</Table.HeaderCell>
   <Table.HeaderCell>Region</Table.HeaderCell>
   

 </Table.Row>
</Table.Header>

<Table.Body>
 
 {
   countries.map(
       countries=><Table.Row key={countries.alpha2Code}>
       <Table.Cell>
         {countries.name}
       </Table.Cell>
       <Table.Cell>{countries.capital}</Table.Cell>
       <Table.Cell>{countries.region}</Table.Cell>
       <Table.Cell><img src={countries.flags.svg} height="100" width='200'></img></Table.Cell>
       
     </Table.Row>
   )
 }
 
</Table.Body>


</Table>
</div>

)

}