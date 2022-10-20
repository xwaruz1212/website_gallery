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
    MagicalWorld,
    MagicMoments,
];

export const elmCnt = booksList.length;

export const descriptions = [
    <a href={TheKissPdf} target="_blank" rel="noopener noreferrer"> The Kiss </a>,
    <a href={SofianosPdf} target="_blank" rel="noopener noreferrer"> Sofianos </a>,
    <a href={Book2Pdf} target="_blank" rel="noopener noreferrer"> ΑΧΝΙΩΤΙΚΕΣ ΑΝΑΜΝΗΣΕΙΣ </a>,
    <a href={MagicalWorldPdf} target="_blank" rel="noopener noreferrer"> MagicalWorld </a>,
    <a href={MagicMomentsPdf} target="_blank" rel="noopener noreferrer"> MagicMoments </a>
];