import Accessori from './../assets/images/accessori.jpg';
import Motocicli from './../assets/images/motocicli.jpg';
import Ditte from './../assets/images/ditte.jpg';
import Ricambi from './../assets/images/ricambi.jpg';

const categories = [
    {
        id: 1,
        title: 'Motocicli',
        image: Motocicli,
        alt: 'Motocicli',
        url: 'motocicli',
    },
    {
        id: 2,
        title: 'Accessori',
        image: Accessori,
        alt: 'Accessori',
        url: 'accessori',
    },
    {
        id: 3,
        title: "Ricambi d'epoca",
        image: Ricambi,
        alt: 'Ricambi',
        url: 'ricambi-epoca',
    },
    {
        id: 4,
        title: 'Le nostre ditte',
        image: Ditte,
        alt: 'Ditte',
        url: 'ditte',
    },
];

export default categories;
