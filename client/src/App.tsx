import { useEffect } from "react";
import { Product } from "./components/Product/Product";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchProducts } from "./store/reducers/ActionCreators";
import styles from "./App.module.css";

function App() {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className={styles.container}>
      {products.edges.map((edge) => {
        return <Product key={edge.node.id} product={edge} />;
      })}
    </div>
  );
}

export default App;
