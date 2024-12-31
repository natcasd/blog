import Link from "next/link";
import christmasdinner from "../images/christmasdinner.jpg";
import searedroast from "../images/searedroast.jpg";
import beefribs from "../images/beefribs.jpg";
import roasties2 from "../images/roasties2.jpg";


import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const ChristmasDinner = () => {
  return (
    <div>
        <div className="px-4 md:px-10 flex justify-center items-center">
          <Link href="/" className="text-blue-500 underline hover:text-blue-700">
            Go back Home
          </Link>
        </div>
      <h1 className="text-7xl font-bold text-center mt-6">My Christmas Dinner Manifesto</h1>
    <div className="flex justify-center my-8">
      <Image src={christmasdinner} alt="Christmas Dinner" width={500} height={300} className="max-w h-auto" />
    </div>
    <div className="px-0 md:px-60">
      <Accordion type="single" collapsible>
        <AccordionItem value="primerib">
          <AccordionTrigger>Prime rib</AccordionTrigger>
          <AccordionContent>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">
              Ingredients:
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Boneless prime rib (from the chuck end is tastier)</li>
              <li>Salt</li>
              <li>Pepper</li>
              <li>Mustard</li>
              <li>Montreal steak seasoning</li>
              <li>Brown sugar</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold">
              Instructions
            </h2>
            <ol className="list-decimal pl-6 mt-4 space-y-3">
              <li>
                Dry prime rib uncovered and raised up in the fridge for a week. 
                Keep the temperature stable to prevent spoilage.
              </li>
              <li>
                On the day of, sear the prime rib straight out of the fridge.
              </li>
              <div className="flex justify-center my-4">
                <Image src={searedroast} alt="Seared Roast" width={500} height={300} className="max-w h-auto" />
              </div>
              <li>
                After searing, bring the prime rib to room temperature on the counter. 
                This takes at least 3 hours.
              </li>
              <li>
                Roast in a 350F convection oven until it reaches 110F. 
                The roast will carry over another 20 degrees after removal.
              </li>
              <li>
                Rest the roast until the temperature stops rising (around 90 minutes).
              </li>
              <li>
                Mix Montreal steak seasoning with brown sugar in a 90/10 ratio.
              </li>
              <li>
                Spread mustard all over the roast as glue and apply a hefty layer of seasoning.
              </li>
              <li>
                Blast in a 450F convection oven for around 10 minutes.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
              Notes
            </h2>
            <p className="mt-4">
            My goal for this prime rib was to develop the most insane crust possible, as it is my favorite part of the prime rib. This is why I sear at the beginning straight out of the fridge, this allows you to get a crust with negligible cooking on the inside. The convection oven further developed this crust. I then wanted to crust it with montreal steak seasoning as I have seen that create a really nice crust on prime ribs 
              in <a href="https://www.youtube.com/watch?v=c5xnQuz1ql8" className="text-blue-500 underline hover:text-blue-700">this video</a> 
              &nbsp;and <a href="https://www.youtube.com/watch?v=Sx1j62NLO90&t=276s" className="text-blue-500 underline hover:text-blue-700">this video</a>. 
              So it would have two layers of crazy crust. Unfortunately, the execution did not live up to the expectation, as so often happens with cooking. I used store bought montreal steak seasoning which I added brown sugar to to try to help make a crust (sugar would melt and form caramely outside as cohesive crust with seasoing). I don't know if the granules on the storebought seasoning were too large or I didn't put enough sugar or montreal seasoning only develops a crust over long periods of time, but the second crust didn't develop in 10 minutes in a 450F convection oven. It kind of just stayed as when it was applied, the seasoning got slightly toasted but there was no real crust it was just mustard and montreal seasoning. In the future I want to try to make my own montreal seasoning with smaller granules, and up the amount of sugar that I use so that it can really caramelize, and maybe forgo the mustard for some sort of oil which will also promote the caramelization.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
              Mistakes I Made
            </h2>
            <p className="mt-4">
            I was an idiot and forgot to remove a piece of paper on the roast before I dried it, this ended up not being a big deal and I removed on day of, but check to be sure. Emphasis on how long it took to bring the prime rib to room temperature, I think it could have taken like 5 hours. I pulled the prime rib at 120 degrees and it rose 20 degrees when it was resting which is something I didn't expect at all. This led the roast to be more done than I wanted it to be. I think convection and roasting at 350 degrees played a pretty big role in this, so it shouldn't rise that much if you do a low and slow method.
            </p>
          </section>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ribs">
          <AccordionTrigger>Ribs</AccordionTrigger>
          <AccordionContent>
          <section className="mb-6">
            <div className="flex justify-center my-4">
              <Image src={beefribs} alt="Beef Ribs" width={400} height={300} />
            </div>
            <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Beef ribs (I removed membrane on the back)</li>
              <li>Salt</li>
              <li>Pepper</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Instructions</h3>
            <ol className="list-decimal pl-6 mt-4 space-y-3">
              <li>
                Roast beef ribs in a 225 degree convection oven. Once desired crust has been reached, wrap in parchment paper and then wrap in aluminum foil and cook for 1 hour and 30 minutes longer.
              </li>
              <li>
                Rest in a cooler for a couple of hours before eating.
              </li>
            </ol>
            <h3 className="text-xl font-semibold mt-6">Notes</h3>
            <p className="mt-4">
              I am an advocate for cooking the prime rib separately from the bones. This gives more surface area on the prime rib for crust, and it permits you to cook the ribs low and slow to break down the collagen they have in them and make them super tasty.
              I also wanted to game the system to pay less. Bone-in prime ribs will generally be 2-3 dollars cheaper than boneless prime ribs, but I would reckon the bones take up a fourth of the weight of the prime rib.
            </p>
            <p className="mt-2">Say you had a 10 pound bone in roast, and bone in roast costs $29 a pound while boneless costs $32. How much per pound are you paying for bones?</p>
            <p className="mt-2">For the 10 pound bone in roast, 2.5 pounds would be bone, and you would have a 7.5 pound boneless roast. The bone in roast costs $290 total. A 7.5 pound boneless roast cost $240. Thus, you are paying 50 dollars for 2.5 pounds of bones, or $20 a pound for beef ribs. This is stupid. </p>
            <p className="mt-2">So I got a boneless roast, and found the beef ribs elsewhere. The beef ribs turned out to be a little hard to source, most butchers didn't carry them until very close to Christmas when they are actually cutting the prime ribs. I was able to source at Costco on Dec. 23 for $5 a pound.</p>
          </section>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Roasties">
          <AccordionTrigger>Roasties</AccordionTrigger>
          <AccordionContent>
          <section className="mb-6">
            <div className="flex justify-center my-4">
              <Image src={roasties2} alt="Roasties" width={400} height={300} />
            </div>
            <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Russet potatoes</li>
              <li>Beef fat</li>
              <li>Rosemary salt - (blitz salt with fresh rosemary and some garlic cloves)</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Instructions</h3>
            <ol className="list-decimal pl-6 mt-4 space-y-3">
              <li>Boil salted water.</li>
              <li>Add potatoes. Boil until outsides are somewhat craggy. This took 20-30 minutes. Stir frequently to promote crag development.</li>
              <li>Remove and let steam and dry out on a tray.</li>
              <li>To further develop cragginess, you can fluff them by tossing in a pot if you think they have enough structural integrity to do so. I found that you can also just scratch the outsides with a fork.</li>
              <li>Optional but highly recommended: do this in advance of the meal, and freeze the potatoes (separated so they don't stick). This makes prep stress free on the day of.</li>
              <li>An important part of roasting the potatoes is ensuring that all parts of the potatoes are covered in oil - if a part isn't covered in oil it will dry out instead of crisp. Freezing facilitates this next step.</li>
              <li>Toss frozen potatoes in beef fat (I did individually to ensure covered in oil). You could try this without frozen ones, but the potatoes might break up as you do it.</li>
              <li>With some additional fat on the pan, put the potatoes on it. I did one of the pans in just straight beef fat, and the other in the drippings from roasting the ribs which had a lot of their own fat plus some juices.</li>
              <li>Roast in a 370F convection oven until crispy all over - this took around 50-60 min for me (convection vastly speeds up this process and ensures even crisping)</li>
              <li>For the ones cooked in straight beef fat, toss with rosemary salt. The ones cooked in the drippings had salty caramelized bits from the drippings so they didn't require salt.</li>
            </ol>
            <h3 className="text-xl font-semibold mt-6">Notes</h3>
            <p className="mt-4">
              While the crisp on the potato was perfect for me, I was unsatisfied with the texture on the inside. It was so fluffy that it had no structural integrity, when you went at it with your fork it would almost disintegrate. I don't see how the cooking process would affect this, it has to do with the type of potato. I want to try with yukon golds, but I have had problems in the past that they absorb too much of the oil they are cooked in and end up greasy. Hopefully if I cut them in large pieces it can protect against this. From videos I have seen, Maris Piper is the premier roasting potato variety, but I think they are hard/impossible to get in the US.
            </p>
          </section>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Aujus">
          <AccordionTrigger>Au jus</AccordionTrigger>
          <AccordionContent>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Beef stock</li>
              <li>Red wine</li>
              <li>Worcestershire sauce</li>
              <li>Parsley</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Instructions</h3>
            <ol className="list-decimal pl-6 mt-4 space-y-3">
              <li>After prime rib has been taken out to be rested, remove the fat from the pan it was roasted in.</li>
              <li>Deglaze the pan with a healthy amount of red wine, and reduce until all the alcohol is cooked off.</li>
              <li>Add 3x the amount of beef stock to the amount of red wine you put in.</li>
              <li>Reduce until it reaches desired consistency (will thicken some more as it cools).</li>
              <li>Taste and add Worcestershire sauce and salt until it tastes great.</li>
              <li>When about to serve, strain and then add chopped parsley (purely for looks).</li>
            </ol>
            <h3 className="text-xl font-semibold mt-6">Notes</h3>
            <p className="mt-4">
              I think I added a little too much Worcestershire sauce and it was more acidic than I would have liked.
            </p>
          </section>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="horseradishsauce">
          <AccordionTrigger>Horseradish sauce</AccordionTrigger>
          <AccordionContent>
          <section className="mb-6">
            <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Creme fraiche</li>
              <li>Jarred horseradish</li>
              <li>Pepper</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Instructions</h3>
            <ol className="list-decimal pl-6 mt-4 space-y-3">
              <li>Mix all ingredients together. Let sit overnight for flavors to meld.</li>
            </ol>
            <h3 className="text-xl font-semibold mt-6">Notes</h3>
            <p className="mt-4">
              I added lemon to horseradish sauce too but it turned out too acidic for me. I think this was due to the fact I used jarred horseradish which is stored in vinegar, while lemon is used to activate fresh horseradish. I didn't use fresh horseradish because last year I had trouble sourcing it, but if I could have found that I would have used instead.
            </p>
          </section>

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    <p className="mt-4 text-center mb-10">
              This all was served with unseasoned boiled broccolini which was a much needed refuge from the intense flavors of the rest of the meal.
            </p>
            <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <i>December 30, 2024</i>
      </div>
      <div className="px-4 md:px-10 flex justify-center items-center mb-4">
          <Link href="/" className="text-blue-500 underline hover:text-blue-700">
            Go back Home
          </Link>
        </div>
    </div>
  );
};

export default ChristmasDinner;
