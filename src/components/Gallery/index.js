import React from 'react';
import './index.scss';
import Paintings from './paintings';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


class Gallery extends React.Component {
  state = {
     current: Paintings[0],
     index:0,
  }

  handleNextSlide = () => {
    this.setState({
      index: this.state.index +1,
      current: Paintings[this.state.index + 1],  
      
      
    })
    
  }

  handlePrevSlide = () => {
    this.setState({
      index: this.state.index -1,
      current: Paintings[this.state.index -1],
      
      
    })
    
  }
  render() {

    return (
      <> 
      <div className='image-cont'>
      <img src={this.state.current} alt="" className='img'/>
      </div>
      <section>
        <FaArrowAltCircleLeft onClick={this.handlePrevSlide} className='left-arrow'/>
        <FaArrowAltCircleRight onClick={this.handleNextSlide} className='right-arrow'/>
      </section>
      </>
     );
  }
}
 
export default Gallery;