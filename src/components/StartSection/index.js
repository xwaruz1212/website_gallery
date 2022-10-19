import React from 'react';
import './index.scss';
import MakisPhoto from '../../assets/images/MakisPhoto.jpg'
import Makis from '../../assets/images/Makis2.jpg'
import { Image, ImageContainer, StartContainer, StartH2, StartP } from './StartCompo';


const Start = () => {
  return (
    <StartContainer id="home">
      <StartH2> A few words about me</StartH2>
      <ImageContainer>
        <Image src={MakisPhoto} />
        <Image src={Makis} />
      </ImageContainer>
      <StartP>I am Makis Lazos from Achna in Cyprus where I was born on the 15th of
        February 1945.
        I am besides other things an amateur writer. I have written and illustrated
        seven books mostly poetry and biographies that have given me great pleasure
        in creating them. I have also painted a several dozen of paintings. On this site all of You can now read my books and see my paintings.
      </StartP>
    </StartContainer>
  );
}

export default Start;