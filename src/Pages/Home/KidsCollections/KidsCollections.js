import React from 'react';

import special1 from '../../../images/special/special-1.png';
import special2 from '../../../images/special/special-2.png';
import special3 from '../../../images/special/special-3.png';
import special14 from '../../../images/special/special-4.png';
import special5 from '../../../images/special/special-5.png';
import special6 from '../../../images/special/special-6.png';
import KidCollection from '../KidsCollection/KidCollection';

const collections = [
    { id: 1, name: "nobi kahini", img: special1 },
    { id: 2, name: "sahabi kahini", img: special2 },
    { id: 3, name: " kahini", img: special3 },
    { id: 4, name: "nobi kahini", img: special14 },
    { id: 5, name: "nobi kahini", img: special5 },
    { id: 6, name: "nobi kahini", img: special6 }
]

const KidsCollections = () => {
    return (
        <div id="kidsCollections" className='container'>
            <h2 className='text-primary text-center'>Our Kids Collections</h2>
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