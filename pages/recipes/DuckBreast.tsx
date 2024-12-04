import React from "react";
import Image from "next/image";
import duck from "../images/duck2.jpg";
import Link from "next/link";

const DuckBreastRecipe = () => {
  return (
    <div className="bg-white text-gray-800 p-6 max-w-4xl mx-auto">
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">Duck Breast 🦆</h1>
      </header>

      <section className="mb-6">
        <h2 className="text-4xl font-semibold border-b border-gray-300 pb-2">
          Ingredients:
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-300 text-[#39FF14]">
          {/* Ingredients List */}
          <Image src={duck} alt="food" width={600} />
          <ul className="list-disc pl-6 mt-4 space-y-8 md:mr-6 flex-grow">
            <li>duck breast</li>
            <li>potatoes</li>
            <li>baby carrots</li>
            <li>reduced chicken stock</li>
            <li>tangerines</li>
            <li>red wine vinegar</li>
            <li>black pepper</li>
            <li>salt</li>
            <li>onion</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
          Meat and Sauce
        </h2>
        <ol className="list-decimal pl-6 mt-4 space-y-3">
          <li>
            dry duck breast uncovered and elevated in the fridge for two days
          </li>
          <li>
            score both ways forming squares - pretty deep as i want it crispy
            over fatty. Sear cold to get max crispiness with the skin (takes
            longer to get to temp when cold)
          </li>
          <li>Season skin with just salt, meat side with salt and pepper</li>
          <li>Put skin side down in cold pan, turn to medium heat.</li>
          <li>
            Keep draining the rendered fat when it gets to be too much. Pressing
            the breasts down with a weight helps with rendering and crisping the
            skin. (SAVE, it's liquid gold 🏆)
          </li>
          <li>
            Flip when skin is sufficiently rendered. Flash on the other side
            until cooked to desired doneness.
          </li>
          <li>
            Add finely minced onion to the pan, use it to deglaze. Add juice of
            a tangerine, and a dash of red wine vinegar. Cook these off for a
            bit.
          </li>
          <li>
            Add a bunch of cubes of the reduced chicken stock, and reduce until
            almost desired consistency.
          </li>
          <li>
            Mount with butter to thicken, and season to taste adding a good
            amount of black pepper.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
          Veggies
        </h2>
        <ol className="list-decimal pl-6 mt-4 space-y-3">
          <li>
            Add carrots to salted boiling water. Boil for 5 minutes then add
            potatoes. Hopefully they are tender at the same time. Drain.
          </li>
        </ol>
      </section>

      <footer className="mt-8">
        <p className="text-center font-bold mb-10">Serve together.</p>
      </footer>
      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <i>December 3, 2024</i>
      </div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
};

export default DuckBreastRecipe;
