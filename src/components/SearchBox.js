import React from "react";

const SearchBox = ({searchfield,searchChange}) => {
    return(
        <div className="pa2">
            <input type='search' placeholder='search robots' className='pa3 ba b--navy bg-light-gray' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;