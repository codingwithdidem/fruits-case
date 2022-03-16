import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { SearchBar } from "../components/SearchBar";
import { FruitBoard } from "../components/FruitBoard";

export default function Home({ fruits }) {
  const [fruit, setFruit] = useState(null);

  const onSearch = (searchTerm) => {
    const foundFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setFruit(foundFruit);
  };

  return (
    <div className="relative min-h-screen w-full font-poppins bg-[url('/images/meshes/riceflower.jpg')] bg-cover bg-no-repeat">
      <Head>
        <title>Fruits Center</title>
        <meta name="description" content="Learn about fruits of the world." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://fruits-case.vercel.app/" />
        <meta name="twitter:creator" content="@DidemKkkaraasl1" />
        <meta property="og:url" content="https://fruits-case.vercel.app/" />
        <meta property="og:title" content="Fruits Center" />
        <meta
          property="og:description"
          content="See what fruits are available in the world and learn about their nutritional value."
        />
        <meta
          property="og:image"
          content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        className="hidden md:block absolute top-10 left-10 w-12 h-12"
        src="/images/blueberry.svg"
        alt="blueberry"
      />

      <img
        className="hidden md:block absolute top-16 right-20 w-12 h-12"
        src="/images/strawberry.svg"
        alt="blueberry"
      />

      <img
        className="hidden md:block absolute top-56 left-28 w-12 h-12"
        src="/images/apple.svg"
        alt="blueberry"
      />

      <main className="w-full h-full px-4 mx-auto text-center py-6">
        <h1 className="text-brand-black font-semibold uppercase text-2xl md:text-4xl mx-auto w-full">
          Fruits Center
        </h1>

        <p className="font-light text-gray-700 mt-2 mb-8">
          Learn about the fruits of the world.
        </p>

        <SearchBar onSearch={onSearch} fruits={fruits} />

        <div className="max-w-5xl mx-auto h-full  py-6">
          {fruit && <FruitBoard {...fruit} />}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const endpoint = `https://thawing-fortress-03877.herokuapp.com/api/fruits/all`;
  const res = await fetch(endpoint);
  const fruits = await res.json();

  return {
    props: {
      fruits,
    }, // will be passed to the page component as props
  };
}
