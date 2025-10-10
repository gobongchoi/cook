import React from 'react'
import SalatImg from '../../../images/salat.png'

function FoodCards() {

    const box: React.CSSProperties = {
        backgroundColor:' rgb(75, 75, 75)',
        display: 'flex',
    }


    const BoxCard: React.CSSProperties = {
        backgroundColor: ' rgb(243, 243, 243)',
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        margin: '30px',
        display: 'grid',
        borderRadius: '25px',
        flexShrink: '0',
        flexGrow: '0',
        paddingBottom: '35px',
        paddingTop: '35px',
    }


  return (
    <div>
        
                <div style={box}>
        
                    <div style={BoxCard}>
                        <img src={SalatImg} alt='Salat' className='Salat-Img'/>
                        <div className='Title'>
                            Fresh and Healthy Salat
                        </div>
                    </div>
        
                    <div style={BoxCard}>
                        Fresh and Healthy Salat
                    </div>
        
                    <div style={BoxCard}>
                        Fresh and Healthy Salat
                    </div>
        
                    <div style={BoxCard}>
                        Fresh and Healthy Salat
                    </div>
        
                </div>
    </div>
  )
}

export default FoodCards