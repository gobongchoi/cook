import React from 'react'
import './Body.css'
import SalatImg from '../../images/salat.png'
import PopUpButton from './BodyComp/PopUp'
import FoodCard from '../Body/BodyComp/FoodCards'


function Body() {

    const boxStyle: React.CSSProperties = {
        fontWeight:100,
        fontSize:25,
    }


  return (
    <div>
        <div className='TitleHead'>

            <div className='Text'>

                <div>
                    Simple and Tasty Recipes
                </div>

                <div style={boxStyle}>
                    be you'r own CHEF
                </div>
                <PopUpButton />
            </div>

            <div>
                <img src={SalatImg} alt='Salat' className='Salat-Img1'/>
            </div>
        
        </div>

        <FoodCard />

    </div>
  )
}

export default Body