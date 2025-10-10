import React from 'react'
import './Body.css'
import SalatImg from '../../images/salat.png'
import PopUpButton from './BodyComp/PopUp'


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
                    Simple and Tasty Recipes 1Test1
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

            <div className='Box-Card'>
                Fresh and Healthy Salat
            </div>

            <div className='Box-Card'>
                Fresh and Healthy Salat
            </div>

        </div>

    </div>
  )
}

export default Body