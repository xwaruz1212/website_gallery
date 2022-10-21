import MagicalWorld from '../../assets/images/MagicalWorld.png'
import Sofianos from '../../assets/images/Sofianos.png'
import Book2 from '../../assets/images/Book2.png'
import TheKiss from '../../assets/images/TheKiss.png'
import MagicMoments from '../../assets/images/MagicMoments.png'
import SofianosPdf from '../../assets/books/SOFIANOS.pdf'
import TheKissPdf from '../../assets/books/The Kiss.pdf'
import Book2Pdf from '../../assets/books/ΑΧΝΙΩΤΙΚΕΣ ΑΝΑΜΝΗΣΕΙΣ.pdf'
import MagicalWorldPdf from '../../assets/books/MAGICALWORLD.pdf'
import MagicMomentsPdf from '../../assets/books/MagicMoments.pdf'
export const booksList = [
    TheKiss,
    Sofianos,
    Book2,
    MagicMoments,
    MagicalWorld

];

export const elmCnt = booksList.length;

export const descriptions = [
    <p>The Kiss is my autobiography in England from the age of eighteen 1963 - 2018 with all the turbulence, difficulties, scandals and beauty of life that endured and enjoyed along the way with my family. That's my emotional diamond of all my writings.<a href={TheKissPdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> Click here to read </a></p>,
    <p>It is a very interesting biography of Bulgarian young friend that died very young through an unsuccessful heart transplant. Worth a read. <a href={SofianosPdf} target="_blank" rel="noopener noreferrer"> Click here to read </a></p>,
    <p>ΑΧΝΙΩΤΙΚΕΣ ΑΝΑΜΝΉΣΕΙΣ is a short autobiography of the first eighteen years of my life in Cyprus plus some short plays all in Greek. <a href={Book2Pdf} target="_blank" rel="noopener noreferrer"> Click here to read </a></p>,
    <p>Short biography of my first granddaughter Pallas Lazou (Ally) for the first five years of her life.<a href={MagicMomentsPdf} target="_blank" rel="noopener noreferrer"> Click here to read </a></p>,
    <p>This book is a biography of my second granddaughter Calla Georgia Lazou for the first five years of her life.<a href={MagicalWorldPdf} target="_blank" rel="noopener noreferrer"> Click here to read </a></p>
];