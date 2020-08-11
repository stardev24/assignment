import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import CustomDebounce from '../utils/debounce'

function SearchBar() {

 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


const deboundSearch = CustomDebounce(searchTerm,300); //This will set debounce delay to our search

console.log("Debounced search term  -",deboundSearch)

useEffect(() => {

    if (deboundSearch) {
        // Call countries API 
        searchCountries(deboundSearch).then((results)=>{
            // Set results in react state
            setSearchResults(results);
        })
      } else {
        setSearchResults([]);
    }
  }, [deboundSearch]);


  const searchCountries = (code) => {
    return fetch(
        `http://localhost:5000/api/search`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query:code}) 
        }
      )
        .then(response => response.json())
        .then((responseObj) => {
            return responseObj
        })
        .catch(error => {
          console.error(error);
          return [];
        });

   } 

   return (

        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
          
            <Grid item xs={6}>
            <h1>Please Select Your Country</h1>
                <Autocomplete
                        id="autocomplete"
                        data-testid='autocomplete-search'
                        options={searchResults}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 500 }}
                        onInputChange={(e)=> handleChange(e)}
                        renderInput={(params) => <TextField {...params} data-testid="autocompleteTxt" alt="autocomplete" label="Countries" variant="outlined" />}
                    />
            </Grid>   

        </Grid> 

   )
}

export default SearchBar