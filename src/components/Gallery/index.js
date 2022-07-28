import React from 'react';
import './index.scss';
import Paintings from './paintings';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


class Gallery extends React.Component {
  state = {  }
  render() { 
    return (
      <> 
      <div className='image-cont'>
      <img src={Paintings} alt="" className='img'/>
      </div>
      <section>
        <FaArrowAltCircleLeft className='left-arrow'/>
        <FaArrowAltCircleRight className='right-arrow'/>
      </section>
      </>
     );
  }
}
 
export default Gallery;