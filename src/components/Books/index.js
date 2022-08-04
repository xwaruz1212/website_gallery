import React from 'react';
import MagicalWorld from '../../assets/images/MagicalWorld.png'
import Sofianos from '../../assets/images/Sofianos.png'
import './index.scss';

const Books = () => {
    return ( 
        <>
            <section className='title'>
                MY BOOKS
            </section>
            <div>
                <a href='https://drive.google.com/file/d/1fOfXeyHRbk6ua3a783tVKmiL7JIDn-5i/view?usp=sharing'>
                <img src={MagicalWorld} alt="" className='img-right' />
                </a>
                <a href='https://drive.google.com/file/d/11TGRcWaG8tAMOS0ZiDw8JrtLaPEHaq3o/view?usp=sharing'>
                <img src={Sofianos} alt="" className='img-left'/>
                </a>
            </div>
         </>

     );
}
 
export default Books ;