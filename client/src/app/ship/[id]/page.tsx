import { fetchShip } from "@/services";
import styles from "./page.module.css";
import AmendForm from "@/components/Form/AmendForm";

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const ship = await fetchShip(Number(params.id));

  return (
    <main className={styles.main}>
      <AmendForm ship={ship} />
    </main>
  );
}
