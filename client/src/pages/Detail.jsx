import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";
import { useDispatch, useSelector } from "react-redux";
import { updateProductsRedux } from "../redux/productsSlice";
import {
  addToCartRedux,
  removeFromCartRedux,
  updateCartQuantityRedux,
} from "../redux/cartSlice";

function Detail() {
  // const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  // const { products } = state;

  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    // already in global store
    if (products.length) {
      const product = products.find((product) => product._id === id);
      const item = {
        image: product.image,
        name: product.name,
        description: product.description,
        _id: product._id,
        price: product.price,
        quantity: product.quantity,
      };
      setCurrentProduct(item);
    }
    // retrieved from server
    else if (data) {
      dispatch(updateProductsRedux(data.products));
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch(updateProductsRedux(indexedProducts));
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch(
        updateCartQuantityRedux({
          _id: id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        })
      );
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch(
        addToCartRedux({
          product: { ...currentProduct, purchaseQuantity: 1 },
        })
      );
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeOneFromCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (!itemInCart) return;
    if (itemInCart.purchaseQuantity > 1) {
      dispatch(
        updateCartQuantityRedux({
          _id: id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) - 1,
        })
      );
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) - 1,
      });
    } else {
      removeFromCart();
    }
  };

  const removeFromCart = () => {
    dispatch(removeFromCartRedux(currentProduct._id));
    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{" "}
            <button onClick={() => addToCart(1)}>Add to Cart</button>
            <button
              hidden={!cart.find((p) => p._id === currentProduct._id)}
              onClick={() => removeOneFromCart()}
            >
              Remove One from Cart
            </button>
            <button
              hidden={!cart.find((p) => p._id === currentProduct._id)}
              onClick={() => removeFromCart()}
            >
              Remove All from Cart
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
