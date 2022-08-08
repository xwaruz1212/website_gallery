import React from 'react';
import './index.scss';
import MakisPhoto from '../../assets/images/Makis-Photo.png'

const Home = () => {
  return (
    <div className='main'>
      <section className='head'>
      MAKIS LAZOS
      </section>
      <div className='text'>
        <h2>
          I am Makis Lazos from Achna in Cyprus where I was born on the 15th of
        February 1945.
          I am besides other things an amateur writer. I have written and illustrated
        seven books mostly poetry and biographies that have given me great pleasure
        in creating them. I have also painted a several dozen of paintings. On this site all of You can now read my books and see my paintings.
        </h2>
      </div>
      <div>
        <img src={MakisPhoto} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Home;