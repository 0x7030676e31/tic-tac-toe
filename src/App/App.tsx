import styles from "./App.module.scss";
import Tile from "../Tile/Tile";
import { useState } from "react";

type Tshape = string | null;

function App(props: { player: string }) {
  const [shapes, setShapes] = useState<Tshape[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);

  function handleClick(id: number) {
    if(shapes[id] != null) return


    const newShapes = [...shapes]
    newShapes[id] = props.player
    setShapes(newShapes)
  }

  return (
    <div className={styles.container}>
      {shapes.map((el, i) => {
        return <Tile key={i} id={i} shape={el} onClick={() => handleClick(i)} />;
      })}
    </div>
  );
}

export default App;