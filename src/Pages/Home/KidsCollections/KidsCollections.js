import React from 'react';

import special1 from '../../../images/special/special-1.png';
import special2 from '../../../images/special/special-2.png';
import special3 from '../../../images/special/special-3.png';
import special14 from '../../../images/special/special-4.png';
import special5 from '../../../images/special/special-5.png';
import special6 from '../../../images/special/special-6.png';
import KidCollection from '../KidsCollection/KidCollection';

const collections = [
    { id: 1, name: " Andaloser Shahjadi", img: special1,price:40 },
    { id: 2, name: "Chotoder Prophet Muhammad", img: special2, price:56 },
    { id: 3, name: " History of Quran", img: special3, price:80 },
    { id: 4, name: "Golpe Golpe Quran  ", img: special14, price:50 },
    { id: 5, name: "Sleeping story", img: special5, price:58 },
    { id: 6, name: "Human Lover Omar farque", img: special6 ,price:65 }
]

const KidsCollections = () => {
    return (
        
            <div id="kidsCollections" className='container bg-primary' style={{ height: '550px' }}>
                <h2 className='text-white text-center p-4'>Our Kids Collections</h2>
                <div className='row'>
                    {
                        collections.map(collection => <KidCollection
                            key={collection.id}
                            collection={collection}
                        ></KidCollection>)
                    }
                </div>
            </div>
       
    );
};

export default KidsCollections;