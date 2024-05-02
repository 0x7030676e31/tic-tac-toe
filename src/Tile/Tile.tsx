import styles from "./Tile.module.scss";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

type Tprops = {
  shape: string | null;
  id: number;
  onClick: () => void;
};

function Tile(props: Tprops) {
  if (props.shape == null)
    return <div className={styles.tile} onClick={props.onClick} />;

  if (props.shape === "circle")
    return (
      <div className={styles.tile} onClick={props.onClick}>
        <img src={circle} alt="circle" />
      </div>
    );

  if (props.shape === "cross")
    return (
      <div className={styles.tile} onClick={props.onClick}>
        <img src={cross} alt="cross" />
      </div>
    );
}

export default Tile;