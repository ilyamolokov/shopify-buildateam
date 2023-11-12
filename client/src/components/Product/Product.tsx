import { useState } from "react";
import { ProductEdge } from "../../@types/types";
import { Canvas } from "../Canvas/Canvas";
import styles from "./Product.module.css";

interface ProductProps {
  product: ProductEdge;
}

export const Product = (props: ProductProps) => {
  const { product } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const imageUrl = product.node.images.edges[0].node.src;
  const regex = /(https?:\/\/\S+(\.png|\.jpg|\.gif))/g;
  const innerHTML = product.node.bodyHtml.replace(regex, "");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.product}>
      <h2>{product.node.title}</h2>
      <Canvas imageUrl={imageUrl} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
        style={{ display: isExpanded ? "block" : "none" }}
      />
      <button className={styles.button} onClick={toggleExpanded}>
        {isExpanded ? "Скрыть" : "Подробнее"}
      </button>
    </div>
  );
};
