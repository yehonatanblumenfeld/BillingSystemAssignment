import React from 'react'
import '../components/Pageination.css'
const Pageination = ({ totalPages, handleClick }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
        <div className='pageBtns'>
            {pages.map(num => (
                <button
                    key={num}
                    onClick={()=>handleClick(num)}
                    >        
                    {num}</button>
            ))}
        </div>
    )
}
export default Pageination
