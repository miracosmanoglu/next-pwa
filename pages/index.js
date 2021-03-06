import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {JSON.stringify(posts)}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.canlidoviz.com/items/latest-data?marketId=0&type=CURRENCY&mobileStyle=true"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 3, // In seconds
  };
}
