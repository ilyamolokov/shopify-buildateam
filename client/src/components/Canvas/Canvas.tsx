import { useCanvasImage } from "../../hooks/useCanvasImage";
import styles from "./Canvas.module.css";

interface CanvasProps {
  imageUrl: string;
}

export const Canvas = (props: CanvasProps) => {
  const { imageUrl } = props;
  const canvasRef = useCanvasImage(imageUrl);

  return <canvas className={styles.canvas} ref={canvasRef} />;
};
