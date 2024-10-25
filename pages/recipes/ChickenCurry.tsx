import Image from "next/image";
import Link from "next/link";
import curry from "../images/curry.jpg";

export default function ChickenCurryRecipe() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Chicken Curry 🍛
        </h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6">
        <Image
          src={curry}
          alt="Chicken Curry"
          width={200}
          height={300}
          className="w-full h-auto"
        />

        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Onion</li>
          <li>Garlic</li>
          <li>Ginger</li>
          <li>Lemon</li>
          <li>Fish sauce</li>
          <li>Curry powder</li>
          <li>Tomatoes</li>
          <li>Some sort of pepper</li>
          <li>Chicken thighs with skin (if bone-in, debone)</li>
          <li>Sweet potatoes</li>
          <li>Half and half</li>
          <li>Chicken stock</li>
          <li>Yogurt (optional)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Recipe:</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Dice up chicken into chunks.</li>
          <li>Sear in a good amount of oil. Remove.</li>
          <li>
            Fry diced onions in the leftover oil. Add diced pepper, sliced
            garlic (a ton), and ginger. Fry these until golden. Then add curry
            powder. Toast for a little. Add some fish sauce.
          </li>
          <li>
            Add diced tomatoes. Cook for a while. Add chicken stock. Add some
            fish sauce (I tend to do so erratically).
          </li>
          <li>Add in lemon. Cook for a bit.</li>
          <li>
            Add back chicken and put in sweet potatoes (these can help thicken
            if needed). Cook until chicken is tender.
          </li>
          <li>Add half and half, and maybe yogurt? Off the heat.</li>
          <li>
            Serve with rice. I ate some directly after cooking and it was good.
            I left it on the counter and came back after a night of studying—up
            there with the best things I have eaten. It had morphed into a
            luscious, spicy, savory, slightly sour stew. I licked the pot clean.
            Definitely going to make a huge batch soon for the freezer.
          </li>
        </ol>
      </div>

      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <i>October 25, 2024</i>
      </div>

      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
}
