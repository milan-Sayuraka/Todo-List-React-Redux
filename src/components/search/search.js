import React,{useState} from 'react';

//Single todo item component
const Search = (props) => {

  //Local state for the input
  const [inputTodo,setInputTodo] =  useState('');

  //Handle onChange event
  const handleSearchInput = (e)=>{
    setInputTodo(e.target.value);
    props.handleSearch(e.target.value)
  }

    return (
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input onChange={handleSearchInput} value={inputTodo} type="text" id="autocomplete-input" className="autocomplete" />
                        {/* <label for="autocomplete-input">Search</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;