// it is update state

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
};

export const SET_PRODUCT = (state, product) => {
    state.product = product;
};
// we size
export const ADD_TO_CART = (
    state,
    { product, quantity, price, avilableTarget, sizeTarget, sizeCm }
) => {
    //     var check = false

    //     var productInCart = state.cart.find(item => {

    //         if(  item.product.id == product.id && item.sizeTarget ==sizeTarget){
    //             check =true
    //            return item.product
    //         }
    //         else{
    //             check = false
    //         }

    //     });

    //     if (check==true) {
    //         productInCart.quantity++;
    //         productInCart.avilableTarget--

    //     } if(check==false ) {

    //         state.cart.push({
    //             product,
    //             quantity,
    //             price,
    //             avilableTarget,
    //             sizeTarget,
    //             sizeCm
    //         });

    // }

    var productInCart = state.cart.find(item => {
        if (item.product.id == product.id) {
            return item.product;
        }
    });

    if (productInCart) {
        productInCart.quantity++;
    } else {
        state.cart.push({
            product,
            quantity,
            price,
            avilableTarget,
            sizeTarget,
            sizeCm
        });
    }
};

export const SET_CART = (state, cartItems) => {
    state.cart = cartItems;
};

export const DELETE_PRODUCT = (state, index) => {
    return state.cart.splice(index, 1);
};

export const DECREASE_PRODUCT = (state, { product, quantity }) => {
    let productInCart = state.cart.find(item => {
        console.log("yes");
        return item.product.id == product.id;
    });

    if (productInCart) {
        productInCart.quantity -= 1;

        if (productInCart.quantity <= 0) {
            productInCart.quantity = 0;
        }
    }
};

export const DELETE_CART = state => {
    state.cart = [];
};

// export const ADD_TO_CART = (state, { product, quantity, price,avilableTarget,sizeTarget }) => {

//     var ckeckAvaiable=0
//     var check = false
//     var productInCart = state.cart.find(item => {
//         if(item.avilableTarget>=2){
//             ckeckAvaiable=item.avilableTarget
//              console.log(item.avilableTarget)

//         if(  item.product.id == product.id && item.sizeTarget ==sizeTarget){
//             check =true
//            return item.product
//         }
//         else{
//             check = false
//         }

//     }

//     });

//         if(ckeckAvaiable>=0){

//             if (check==true) {
//                 productInCart.quantity++;
//                 productInCart.avilableTarget--
//                 if(productInCart.avilableTarget==0){
//                     productInCart.avilableTarget=0
//                 }

//             } if(check==false) {

//                 state.cart.push({
//                     product,
//                     quantity,
//                     price,
//                     avilableTarget,
//                     sizeTarget
//                 });

//             }

//         }

// };
