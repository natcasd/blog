import Image from "next/image";
import Link from "next/link";
import hotteok from "../images/hotteok.jpeg";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Filling {
  name: string;
  ingredients: [number, string][];
  instructions: string[];
}

const fillings: Filling[] = [{
  name: "Brown Sugar 🍮",
  ingredients: [
    [160, "light brown sugar"],
    [10, "cinammon"],
    [10, "all spice"],
    [40, "finely chopped peanuts"]
  ],
  instructions: [
    "Mix all ingredients together.",
    "Aim for around 20g a hotteok."
  ]
},
{
  name: "Chocolate 🍫",
  ingredients: [
    [160, "chocolate chips (preferably high quality)"]
  ],
  instructions: [
    "Mix all ingredients together.",
    "Aim for around 20g a hotteok."
  ]
},
{
  name: "Kimchi Cheese 🧀",
  ingredients: [
    [100, "kimchi"],
    [1, "onions"],
    [1, "inch ginger"],
    [6, "cloves garlic"],
    [0, "sesame oil (as needed)"],
    [1, "spoonful of gochujang"],
      [10, "stringy cheese (dehydrated mozz works)"],
    ],
    instructions: [
      "Stir fry onions in sesame oil.",
      "As this is going, mince garlic and ginger.",
      "Add garlic and ginger to the onions when they have gotten a little color.",
      "Add gochujang.",
      "Add kimchi back. Stir fry for a while - you want it to get to a point where it is frying, not boiling, so make sure you are using ample heat and a big enough pan.",
      "Put around 20g of stir fry in hotteok, and top w/ as much cheese as you can manage."
    ],
  },
];

const FillingViewer = ({ fillings, multiplier }: { fillings: Filling[], multiplier: number }) => {
  const getScaledAmount = (baseAmount: number) => {
    return (baseAmount * multiplier / 8).toFixed(0);
  };
  return (
    <Accordion type="single" collapsible>
      {fillings.map((filling, index) => (
        <AccordionItem key={index} value={`filling-${index}`}>
          <AccordionTrigger>{filling.name}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-1">Ingredients:</h4>
                <ul className="list-disc list-inside space-y-0.5">
                  {filling.ingredients.map(([amount, ingredient], idx) => (
                    <li key={idx}>
                      {getScaledAmount(amount)}{amount > 0 ? 'g ' : ' '}{ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-1">Instructions:</h4>
                <ol className="list-decimal list-inside space-y-0.5">
                  {filling.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
  
}

export default function HotteokRecipe() {
  const [multiplier, setMultiplier] = useState(8);

  const handleMultiplierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 8;
    setMultiplier(value);
  };

  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Hotteok 🥞
        </h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6">
        <Image
          src={hotteok}
          alt="Hotteok"
          width={200}
          height={300}
          className="w-full h-auto"
        />

        <div className="mb-4 mt-4">
          <label htmlFor="multiplier" className="block text-sm font-large font-bold">
            Servings
          </label>
          <input
            type="number"
            id="multiplier"
            value={multiplier}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setMultiplier(value || 0); // Allow 0 as fallback instead of 8
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                const value = parseInt(e.currentTarget.value) || 0; // Allow 0 as fallback
                const delta = e.key === 'ArrowUp' ? 8 : -8;
                const newValue = Math.round((value + delta) / 8) * 8;
                setMultiplier(Math.max(0, newValue)); // Keep the max(0) check
              }
            }}
            min="0"
            step="8"
            className="mt-1 block w-20 rounded-md border-2 border-grey shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-auto [&::-webkit-inner-spin-button]:appearance-auto ml-1"
          />
        </div>

        <h2 className="text-3xl font-semibold mb-4 underline">Ingredients:</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Dough:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>{Math.round(80 * multiplier / 8)}g rice flour</li>
            <li>{Math.round(200 * multiplier / 8)}g bread flour</li>
            <li>{Math.round(20 * multiplier / 8)}g tapioca starch</li>
            <li>{Math.round(4 * multiplier / 8)}g instant yeast</li>
            <li>{Math.round(20 * multiplier / 8)}g sugar</li>
            <li>{Math.round(6 * multiplier / 8)}g salt</li>
            <li>{Math.round(16 * multiplier / 8)}g canola oil</li>
            <li>{Math.round(220 * multiplier / 8)}g water</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Fillings:</h3>
          <FillingViewer fillings={fillings} multiplier={multiplier} />
        </div>

        <h2 className="text-3xl font-semibold mb-4 underline">Recipe:</h2>
        <h3 className="text-2xl font-semibold mb-2">Dough:</h3>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Heat up water to around 100F.</li>
          <li>Add sugar and yeast to water. Mix until dissolved. Set aside.</li>
          <li>Sift bread flour, rice flour, and tapioca starch into bowl. Add salt.</li>
          <li>Add wet mix to dry. Knead (note: a rice paddle or rubber spatula works well, making it not stick to your hands). Add canola oil. Knead some more. You want good gluten developement as it makes it more fun to eat and easier to form.</li>
          <li>You can rest the dough overnight, and it will develop a yeasty flavor. Some people like this, but I don't and I prefer to make the hotteok immediately.</li>
        </ol>
        <h3 className="text-2xl font-semibold mb-2">Cooking:</h3>
        <p>Videos are worth a million words.</p>
        <div className="flex justify-center my-8">
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/8ZhIMuvqtbk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
          <p>This recipe creates dough that is a little firmer and less sticky than the dough pictured in the video. Forming process is basically the same though, pressing the spoon of sugar into the dough helps create a pocket and makes it easier to wrap up. You can also fry these with as much or as little oil as you want, play around with it and see what you like best. Use a nonstick pan if you have.</p>
          
      </div>

  

      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
      <p><b>Credits to Chris Chang for developing this recipe.</b></p>
        <i>December 9, 2024</i>
      </div>

      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
}