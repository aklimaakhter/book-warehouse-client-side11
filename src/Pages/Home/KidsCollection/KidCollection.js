import React from 'react';

const KidCollection = ({collection}) => {
    const {name, img,price}= collection;
    return (
        <div className=' g-2 col-sm-12 col-md-6 col-lg-2 '>
                <div className="card " style={{ width: "10rem", height: "380px" }}>
                    <img style={{ height: '200px' }} src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className='mb-2'>
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">${price}</p>
                        </div>
                        <div >
                            <button type="button" className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
    );
};

export default KidCollection;