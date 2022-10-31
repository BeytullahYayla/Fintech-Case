import axios from "axios"
export default class CountryService{
    api_url='https://restcountries.com/v2/all'
    getCountries(){
        return axios.get('https://restcountries.com/v2/all')
    }
   
}
