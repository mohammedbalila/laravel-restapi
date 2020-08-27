import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get(`http://127.0.0.1:8000/api/products`).then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios
    .get(`http://127.0.0.1:8000/api/products/${productId}`)
    .then((response) => {
      commit("SET_PRODUCT", response.data);
    });
};

export const addProductToCart = ({ commit }, { product, quantity, price ,avilableTarget , sizeTarget, sizeCm}) => {
  commit("ADD_TO_CART", { product, quantity, price,avilableTarget , sizeTarget,sizeCm });


//   axios.post("http://127.0.0.1:8000/api/cart", {
//     product_id: product.id,
//     quantity,
//   });
};

export const getCartItems = ({ commit }) => {
  axios.get(`http://127.0.0.1:8000/api/cart`).then((response) => {
    commit("SET_CART", response.data);
  });
};

export const deleteCartItem = ({ commit }, index) => {
    console.log(index)
//   axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`);
  commit("DELETE_PRODUCT", index);
};




export const decreaseProduct = ({ commit } , { product, quantity }) => {
    // axios.delete(`http://127.0.0.1:8000/api/cart`);
    commit("DECREASE_PRODUCT", { product, quantity });
  };


  export const clearCartItems = ({ commit }) => {
    axios.delete(`http://127.0.0.1:8000/api/cart`);
    commit("DELETE_CART");
  };





