import useInventory from '../../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';


const Inventories = () => {
    const [inventories, setInventories] =useInventory();

    
    return (
        <div id='inventories' className='container mt-5'>
            <h2 className='text-primary text-center'> Book Items:{inventories.length}</h2>
            <div className='row mb-5'>
                {
                    inventories.map(inventory=> <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;