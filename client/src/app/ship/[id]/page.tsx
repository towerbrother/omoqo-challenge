import { fetchShip } from "@/services";
import styles from "./page.module.css";
import Form from "@/components/Form/Form";

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const ship = await fetchShip(Number(params.id));

  return (
    <main className={styles.main}>
      <Form ship={ship} />
    </main>
  );
}
