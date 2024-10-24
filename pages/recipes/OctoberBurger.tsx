import Image from "next/image";
import Link from "next/link";
import burger from "../images/octoberburger1.jpg";

export default function OctoberBurger() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          October Burger 🎃
        </h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6">
        <Image
          src={burger}
          alt="Hotdog 1"
          width={200}
          height={300}
          className="w-full h-auto"
        />
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Ground beef (preferably 80/20 but I have 85/15)</li>
          <li>Smoked gouda</li>
          <li>Dill</li>
          <li>Tomato</li>
          <li>Onion</li>
          <li>Full fat Greek yogurt (super thick)</li>
          <li>Kewpie</li>
          <li>Mustard</li>
          <li>Vinegar</li>
          <li>Black pepper</li>
          <li>Sauce from yesterday</li>
          <li>Papo seco</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          How to Prep Sauce from Yesterday:
        </h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Cook onions in beef fond until somewhat deglazed.</li>
          <li>Add chicken stock.</li>
          <li>
            Reduce until noticeably thicker, add Dijon mustard to thicken
            further, and mount to thicken even further.
          </li>
          <li>Season to taste with salt and pepper.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-2">Recipe:</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>
            Prep burger sauce.
            <ol className="list-alpha list-inside ml-6 mt-2 space-y-1">
              <li>Chop dill into manageable pieces.</li>
              <li>
                Add yogurt and Kewpie in a preferred ratio to a bowl. Add dill
                and black pepper.
              </li>
              <li>
                Add vinegar and/or mustard until it reaches desired acidity. Mix
                well.
              </li>
            </ol>
          </li>
          <li>Slice tomato and onions.</li>
          <li>
            Let <code>x</code> be the number of patties desired. Portion{" "}
            <code>x</code> burgers into 1cm thick patties, forming them to be
            the size of the papo seco when cooked.
          </li>
          <li>
            Season one side of the patties with salt and pepper, then add to a
            preheated pan.
          </li>
          <li>
            Sear well on one side, flip, and immediately add cheese. When the
            patty is just barely cooked, stack one on top of another and cook
            for a little longer.
          </li>
          <li>
            Transfer to waiting papo seco, closing with the lid to warm the bun
            and absorb juices.
          </li>
          <li>
            Add onions to the pan and sear, deglazing while keeping them
            somewhat crunchy, about 5-10 minutes at high heat.
          </li>
          <li>
            Remove patties from bun, spread burger sauce on the bottom bun, then
            place patties back. Add onions (use a generous amount).
          </li>
          <li>
            Drench with sauce from yesterday. Top with tomatoes and enjoy.
          </li>
        </ol>
      </div>
      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <i>October 23, 2024</i>
      </div>

      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
}
