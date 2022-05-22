import type { Item } from "./types";

import { useEffect, useState } from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  const handleDelete = (id: number) => {
    if (items) {
      const deleteItems = items.filter((item) => item.id !== id);
      setItems(deleteItems);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input name="text" type="text" autoFocus />
        <button>Add</button>
      </form>
      <ul>
        {!items
          ? null
          : items.map((item) => (
              <li
                key={item.id}
                className={item.completed ? styles.completed : ""}
              >
                {item.text}{" "}
                <button onClick={() => handleDelete(item.id)}>[X]</button>
              </li>
            ))}
      </ul>
    </main>
  );
}

export default App;
