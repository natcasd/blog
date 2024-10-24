import Link from "next/link";
import Image from "next/image";

import grates from "../images/grates.jpg";
import ramen from "../images/campingramen.jpg";
import spameggs from "../images/spameggs.jpg";

export default function Blog5() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Camping Trip!
        </h1>
      </div>
      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <p className="indent-8 mb-4">
          I went on a camping trip with my friends this weekend, and as I
          usually am, I was mainly concerned with what we were going to eat. I
          was the only one that hadn't been camping before, so I had no
          experience storing food and cooking it out in the "wilderness". I am
          in love with the idea of open-firing cooking and have been
          accumulating various cooking implements to assist me in doing so, and
          I was excited to use them on the trip. Due to logistical concerns we
          were only staying for one night, so there were only 3 meals to deal
          with (dinner, second dinner, and breakfast).
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <div className="md:px-2">
            <Image src={grates} alt="grates" height={700} />
          </div>
        </div>
        <p className="indent-8 mb-4">
          For dinner on the first night we had an assortment of sausages to cook
          and some vegetables. I originally wanted to cook everything over the
          fire, but we had difficulties getting the fire really going because
          our wood was somewhat wet. Although I was fighting against it because
          I so wanted to cook on the fire, it ended up being very fortunate that
          my friend pushed to bring a butane burner. We fried up some onions in
          a pan and set them to the side. We also boiled some corn, oiled it,
          and roasted it over the fire in one of my grill grates. We also oiled
          and roasted a bunch of green onions over the fire, and accidently
          dropped them in the fire. We were able to retrieve them though and the
          char was fantastic. Due to concerns with the fire, we didn't roast the
          sausages using my grill grates, and instead cooked it in a pan. We ate
          the sausage taco style with martin's potato bread and topping with
          onions and green onions. The corn was good, but as my friend noted, it
          was better raw. I also got these pork ribs from the butcher, which are
          basically like off cuts of pork chops. While my friend was preparing
          second dinner, I entertained myself by cutting the meat off of these
          bones, slicing it into thin pieces, and grilling it over the fire with
          my grill grates. It was good. I could get a really nice crust on the
          pork over the fire which is hard to do with other means, but I
          couldn't stop thinking about how vastly it would be improved by a
          sugary, savory marinade which would allow it to crisp up so nicely.
        </p>
        <p className="indent-8 mb-4">
          For second dinner we had Jin ramen done up fancily by my friend. He
          seared the aforementioned pork bones with some shallots, fryed the
          soup base, and then poured the juice from the sausages we cooked and
          let that boil for a while. He then started cooking 2 packs of ramen of
          the four he brought, but through my insistence I eventually convinced
          him to put the other two in. We put a tin of spam in too. We topped
          off this abomination with no less than 7 slices of american cheese,
          and some green onions for health. The four of us finished this with
          ease, reaffirming my push for 4 ramen packets.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <div className="md:px-2">
            <Image src={ramen} alt="ramen" height={450} />
          </div>
        </div>

        <p className="indent-8 mb-4">
          After fooling around the fire for a while longer and whittling sticks,
          our appetites crept back up on us and we went for a "
          <a
            className="text-blue-500 underline hover:text-blue-700"
            href="https://www.tiktok.com/@chrisma909/video/7409154576370240811"
          >
            late night demon spam
          </a>
          ". My friend says the spam is better when it gets super crispy, but I
          think it gets too leathery.
        </p>
        <p className="indent-8 mb-4">
          Waking up the next morning, my stomach was in a state: the second tin
          of spam proved to be rash but also maybe the 7 slices of american
          cheese. My friend Chris insists he was the voice of reason trying to
          convince us not to eat it as we needed it for breakfast the next
          morning, but I only seem to remember him begging us to cook it. Before
          breakfast, we went on a nice hike which did wonders for my stomach and
          stirred my appetite. I was craving watermelon or some other sort of
          fruit as a purge from the transgressions of the previous night, but
          there were no stores nearby. We were able to forage some sort of grape
          on our hike, but they were awfully sour. Arriving back at camp, we got
          right to work making breakfast with the eggs we had and another can of
          spam we picked up from the camp store (phew). Cubed up the spam,
          seared it, removed it, scrambled the eggs nicely using the butane
          burner that gets super hot, and added a few more slices of american
          cheese to make them luscious. I think I once again went overboard
          though, they were a little too luscious and since our only vehicle to
          get them into our mouths were the 4 leftover slices of bread, the
          creaminess and lack of structural integrity made it somewhat hard to
          eat.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <div className="md:px-2">
            <Image src={spameggs} alt="spam eggs" />
          </div>
        </div>

        <p className="indent-8 mb-4">
          Keeping on the foraging theme, my friend was able to pick out a huge
          maitake mushroom from the campsite, and we harvested it and fried it
          up on the butane burner. It was tasty and made tastier by the fact
          that we foraged it, but in the same note as the pork, we couldn't stop
          thinking how vastly it would be improved with some garlic and some
          parsley tossed in at the last minute to lend it some flavor and
          freshness. Also some lemon to squeeze on top.{" "}
        </p>
        <p className="indent-8 mb-4">
          All in all, cooking at the campsite is super fun. I love cooking for
          friends, and the primal campfire vibe added to it. Things would have
          gotten very gross very quickly though if we did not have a nearby
          water source to clean with. For next time, I am definetly bringing
          some garlic, lemon, salt, pepper, and soy sauce as you may not
          anticipate when they will be needed but when they are they will be
          able to greatly improve dishes. Also to note: when dealing with
          swimmers, always overestimate the amount of food needed.
        </p>
        <i>September 5, 2024</i>
      </div>

      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
}
