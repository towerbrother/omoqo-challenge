import styles from "./page.module.css";
import { fetchShips } from "@/services";
import Card from "@/components/Card/Card";
import Form from "@/components/Form/Form";

export default async function Home() {
  const ships = await fetchShips();

  return (
    <main className={styles.main}>
      <Form />
      <div className={styles.cards}>
        {ships && ships.length > 0 ? (
          ships.map((ship) => <Card key={ship.id} ship={ship} />)
        ) : (
          <p>No ships to show!</p>
        )}
      </div>
    </main>
  );
}
