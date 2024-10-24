import Image from "next/image";
import Link from "next/link";
import styles from "../Blog1.module.css";
import burrata from "../images/burrata.jpg";
import calamari from "../images/calamari.jpg";
import eggplant from "../images/eggplant.jpg";
import mains from "../images/mains.jpg";
import mural from "../images/mural.jpg";

export default function DaddiesNYC() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Daddies NYC Review
      </h1>
      <div className="px-8 py-16 md:px-16 lg:px-16">
        <p className="indent-8">
          Today, I ate at Daddies, the West Village outpost of the Frank
          Prisinzano empire. It was a meal of much anticipation after a long day
          of packing and driving. The decor is classic Frank, to the extreme.
          Tons of marble, lots of intricate parts, brilliant woodwork. I felt
          cool eating in there. The menu is basically just a clone of the Lil
          Frankies one. After being questioned multiple times if we wanted
          drinks, we ordered appetizers. We ordered the burrata (which the
          waiter upsold us from the caprese salad), the calamari, and the
          eggplant. The burrata was incredible, so creamy and luscious, but I
          wish there were more tomatoes to balance it out.
        </p>
        <Image
          src={burrata}
          alt="burrata"
          width={600}
          height={400}
          className="mx-auto"
        />
        <p className="indent-8">
          The calamari was good, but I wish it were more seasoned. I remember
          the calamari being perfect at Lil Frankies so this was a downgrade.
        </p>
        <Image
          src={calamari}
          alt="calamari"
          width={600}
          height={400}
          className="mx-auto"
        />
        <p className="indent-8">
          The eggplant was spectacular as always. It is a pretty perfect dish,
          the soft eggplant complemented by the chili oil, and accented by the
          smokiness from the char and the salt. Also fun to order and eat.
        </p>
        <Image
          src={eggplant}
          alt="eggplant"
          width={600}
          height={400}
          className="mx-auto"
        />
        <p className="indent-8">
          For mains we got the limone, ragu, chicken parm, and a margherita
          pizza.
        </p>
        <Image
          src={mains}
          alt="mains"
          width={600}
          height={400}
          className="mx-auto"
        />
        <p className="indent-8">
          Limone was another perfect dish, if you haven't had you need to. Ragu
          was great - lovely small tender meatballs and sausage permeated by
          sauce. Chicken parm was great, thin but not too thin cutlet, perfectly
          moist and tender in the right ratio with breading and cheese. I used
          to just want the cutlet impossibly thin for parm, but this proves
          otherwise. The pizza was also fantastic. I recently ate at my favorite
          restaurant in Providence, Figidi. They have great Neapolitan pizza,
          the best I have had in a while. I was able to compare that pizza today
          with that of Daddies, and Daddies blew Figidini out of the water. I
          was reminded of the importance of an uber-light dough and of char in
          the balance of flavor in margherita. Daddies is exceptional in these
          regards.
        </p>
        <p className="indent-8">
          I was perplexed why this restaurant was basically empty while we
          dined. All of the food was fantastic basically the same as Lil
          Frankies, yet no one was there. This concerns me because I am in full
          support of my guy Frank, and I know he put significant resources into
          developing this restaurant. My mom claims it's because everyone fled
          New York for Memorial Day weekend. I just slightly got the sense they
          were struggling, with the drinks being pushed on us and being upsold
          on burrata. This would be normal at most restaurants but I expect a
          little more from service at Frank's restaurants, as I have been so
          impressed in the past. If Lil Frankies is too far, GO HERE! It's the
          same thing.
        </p>
        <Image
          src={mural}
          alt="mural"
          width={600}
          height={400}
          className="mx-auto"
        />
        <p className="italic">May 27, 2024</p>
      </div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
    </div>
  );
}
