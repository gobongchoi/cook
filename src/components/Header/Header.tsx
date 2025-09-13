import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        < div className='header'>

            <div className='logo'>
                LOGO
            </div>
            
            <div className='links-container'>
                <div className='links'>
                Fridge
                </div>
                <div className='links'>
                    Recipes
                </div>
                <div className='links'>
                    Favourite
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header