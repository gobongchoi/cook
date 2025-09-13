import React from 'react'
import './Body.css'
import SalatImg from '../../images/salat.png'

function Body() {
  return (
    <div>
        <div className='Text'>
            Simple and Tasty Recipes
        </div>

        <div className='Box'>
            <div className='Box-Card'>
                <img src={SalatImg} alt='Salat' className='Salat-Img'/>
                <div className='Title'>
                    Fresh and Healthy Salat
                </div>
                
            </div>
            <div className='Box-Card'>
                Fresh and Healthy Salat
            </div>

        </div>

    </div>
  )
}

export default Body