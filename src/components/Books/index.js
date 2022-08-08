import React from 'react';
import MagicalWorld from '../../assets/images/MagicalWorld.png'
import Sofianos from '../../assets/images/Sofianos.png'
import Book2 from '../../assets/images/Book2.png'
import TheKiss from '../../assets/images/TheKiss.png'
import MagicMoments from '../../assets/images/MagicMoments.png'
import './index.scss';

const Books = () => {
    return ( 
        <>
            <section className='title'>
                MY BOOKS
            </section>
            <div>
                <a href='https://drive.google.com/file/d/11TGRcWaG8tAMOS0ZiDw8JrtLaPEHaq3o/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <img src={Sofianos} alt="" className='img-one'/>
                </a>
                <a href='https://drive.google.com/file/d/1ekwZGVzgSUKL726glMBEIPAd3YoHCXUo/view?usp=sharing'target="_blank" rel="noopener noreferrer">
                <img src={TheKiss} alt="" className='img-two' />
                </a>
                <a href='https://drive.google.com/file/d/1iRBXCSjuSLPv-gYh-Wu4gqvi59cXHyqU/view?usp=sharing'target="_blank" rel="noopener noreferrer">
                <img src={Book2} alt="" className='img-three' />
                </a>
                <a href='https://drive.google.com/file/d/1fOfXeyHRbk6ua3a783tVKmiL7JIDn-5i/view?usp=sharing'target="_blank" rel="noopener noreferrer">
                <img src={MagicalWorld} alt="" className='img-four' />
                </a>
                <a href='https://drive.google.com/file/d/1PfbNiKkbKEa4JbXovbWBqTJpM3H_QF8g/view?usp=sharing'target="_blank" rel="noopener noreferrer">
                <img src={MagicMoments} alt="" className='img-five' />
                </a>
            </div>
         </>

     );
}
 
export default Books ;