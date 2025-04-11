import Image from "next/image";
import Link from "next/link";
import { NotFoundSvg } from "@/shared/ui/icons";
import styles from "./styles.module.scss";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <NotFoundSvg width={400} height={400}/>
      <div className={styles.text}>
        <h1>404 - Страница не найдена</h1>
        <p>
          Перейти на <Link href={"/"}>главную</Link>
        </p>
      </div>
    </section>
  );
}
