import Link from "next/link";
import Image from "next/image";

import rice1 from "../images/friedrice1.jpg";
import rice2 from "../images/friedrice2.jpg";

export default function DumplingHouse() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Review of{" "}
          <a
            className="text-blue-500 underline hover:text-blue-700"
            href="https://www.dumplinghousema.com/"
          >
            Dumpling House
          </a>{" "}
          in Cambridge, MA
        </h1>
      </div>
      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <p className="indent-8 mb-4">
          I had such a wonderful meal this afternoon.
        </p>
        <p className="indent-8 mb-4">
          We were up in Boston celebrating a friend’s birthday. This was the
          next day, and we were all a bit fuzzy as a result of the excesses of
          the previous night. Although I deeply desired it to be, this was not
          the first meal of the day. We had eaten breakfast at a decent but
          unremarkable diner.{" "}
        </p>
        <p className="indent-8 mb-4">
          After a lazy afternoon of watching the soccer games and listlessly
          consuming Instagram reels, we descended upon Dumpling House in
          Cambridge. I had eaten here once before and it was great. However,
          there was a brief event during this visit that came to dominate my
          memory of the place: a plate of fried rice that floated past us en
          route to another table. It absorbed me: it was exactly the ideal of
          fried rice I had in my head. It was a heaping plate of fluffy rice,
          with all the random bits and bobs that a fried rice should have, and,
          most notably, large pieces of what I thought were cabbage, which I had
          never seen before in a fried rice. For some reason I could also just
          tell it was absolutely laden with MSG. I was furious that I hadn’t had
          the sense to order it. It inspired a good amount of fried rice lunches
          in the rest of that summer, two pictured below.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <Image src={rice2} alt="rice2" height={350} />
          <Image src={rice1} alt="rice1" height={350} />
        </div>

        <p className="indent-8 mb-4">
          A year and a half later, I finally got the chance to revisit the
          restaurant and amend my mistake. I was determined to make no errors in
          my ordering. It was a brisk day, so the first item we ordered was a
          vat of beef mince soup. It was well executed, like every beef mince
          soup I have had. A side of chili oil to liven things up is mandatory.
          It was just what the doctor ordered: I find the slightly thick quality
          some Chinese soups have to be super comforting, on such brisk days
          there is nothing better.{" "}
        </p>
        <p className="indent-8 mb-4">
          The other items took a bit more deliberation. As a consequence of the
          setting described above, we had our minds set on intense flavors: I
          wanted to get my ass kicked with spice, and I wanted to be punched in
          the face with MSG. We settled on spicy salt and pepper pork, of course
          the fried rice, and at the last second switched from my{" "}
          <a href="https://www.youtube.com/watch?v=h8EcbCXv6M0">
            typical garlic bok choy/spinach
          </a>{" "}
          to sauteed cabbage with chili. The spicy salt and pepper pork was
          perfect. It was crispy chunks of fatty, tender pork and sliced peppers
          that were coated in a spicy, salty, and super umami (read: MSG) mix.
          The cabbage was also great, braised cabbage is so goated. This also
          was served in a somewhat spicy and intensely umami sauce.
        </p>

        <p className="indent-8 mb-4">
          We also ordered a hot tea that was a perfect accompaniment to the
          food. It had such nice tea flavor. It is always remarkable to me how
          Chinese teas taste so incredible with nothing added to them, as my
          friend Zach says “just the leaves.”
        </p>
        <p className="indent-8 mb-4">
          Last, but certainly not least, we had the fried rice. This lived up
          every bit to my expectation. It was powerfully umami. It had pieces of
          pork, shrimp, and a bunch of other stuff I am forgetting. Something
          that intrigued me was what I thought was cabbage actually turned out
          to be iceburg lettuce. To Western palates this may seen odd, but
          cooked lettuce is fantastic. The fragile quality of the lettuce lent
          to a tender feeling. The only way to understand this is to try it, but
          super fluffy rice in combination with the lettuce made the fried rice
          seem tender. I don’t know a better word to describe it. I have never
          been able to achieve this feeling with the fried rices I make at home,
          and there are no other fried rices I can remember off the top of my
          head having it.
        </p>
        <p className="indent-8 mb-4">
          Needless to say, we devoured everything. Fantastic. It was all
          fantastic. I walked out of the restaurant in a state of well-being
          that one can only obtain via a really great meal.
        </p>
        <i>November 10, 2024</i>
      </div>

      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
}
