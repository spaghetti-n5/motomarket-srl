import Accessori from './../assets/images/accessoriCat.jpg';
import Motocicli from './../assets/images/motocicli.jpg';
import Usato from './../assets/images/usato1.jpg';
import Ditte from './../assets/images/ditte.jpg';

const categories = [
    {
        id: 1,
        title: 'Motocicli',
        color: '#F186B6',
        image: Motocicli,
        alt: 'Motocicli',
    },
    {
        id: 2,
        title: 'Ricambi & Accessori',
        color: '#00DF6B',
        image: Accessori,
        alt: 'Ricambi & Accessori',
    },
    {
        id: 3,
        title: 'Usato',
        color: '#FFD92D',
        image: Usato,
        alt: 'Usato',
    },
    {
        id: 4,
        title: 'Le nostre ditte',
        color: '#3FE7FF',
        image: Ditte,
        alt: 'Ditte',
    },
];

export default categories;
