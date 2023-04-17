import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async() =>{
    const lodedProducts = await fetch('products.json');
    const products = await lodedProducts.json();
    

    // If the cart data is in database we must have to use async await. But in this case we just take data feom local storage.

    const storedCart = getShoppingCart();
    let savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd=> pd.id=== id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    // if you need to send two things:
    // Option-1:  retuen [item1, item2]
    // Option-2:  retuen {item1, item2}


    return savedCart;

}

 export default cardProductLoader;