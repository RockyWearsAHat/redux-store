import { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import { useDispatch, useSelector } from "react-redux";
import { updateProductsRedux } from "../../redux/productsSlice";

function ProductList() {
  const selectedProducts = useSelector((state) => state.products);
  const selectedCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  const dispatch = useDispatch();

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch(updateProductsRedux(data.products));
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        console.log(products);
        dispatch(updateProductsRedux(products));
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!selectedCategory) {
      return selectedProducts.products;
    }

    return selectedProducts.products.filter(
      (product) => product.category._id === selectedCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {selectedProducts.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
