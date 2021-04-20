import React from 'react';

const Searchbox = ({searchfield,searchChange}) =>
{
    return(
        <div className ='pa2 '>
    <input className ='pa2 ba bg-lightest-blue' type ='search' placeholder='robot search' onChange ={searchChange}/>
    </div>
);
}
export default Searchbox