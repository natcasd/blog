import Link from "next/link";
import Image from "next/image";

import roll from "../images/sausageroll.jpg";
import roast from "../images/roast.jpg";
import tayyabs1 from "../images/tayyabs1.jpg";
import tayyabs2 from "../images/tayyabs2.jpg";
import bonemarrow from "../images/bonemarrow.jpg";
import toffeecake from "../images/toffeecake.jpg";
import madelines from "../images/madelines.jpg";
import burger from "../images/burger.jpg";
import mousse from "../images/mousse.jpg";
import turbot from "../images/turbot.jpg";
import bratmeal from "../images/bratmeal.jpg";
import chips1 from "../images/fishandchips1.jpg";
import chips2 from "../images/fishandchips2.jpg";

export default function Blog1() {
  return (
    <div className="px-4 md:px-16 lg:px-12  mx-auto max-w-4xl ">
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
      <h1 className="text-xl md:text-3xl font-bold mb-4">
        Nathan's Food Tour of London and Surrounding Areas
      </h1>
      <p className="indent-8">
        The first day in London I had a sausage roll at Paddington station. It
        was pretty bad but it was cold and rainy so it hit the spot.
      </p>
      <p className="indent-8">
        The second day in London we were in the city center and we went to the
        Borough Market. There were many delicious treats - we didn't wait in
        line for the viral strawberries with chocolate. Instead, we opted for
        sausage rolls at{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://thegingerpig.co.uk/pages/borough-market"
        >
          The Ginger Pig
        </a>
        .
      </p>
      <div className="flex justify-center items-center my-6">
        <Image src={roll} alt="sausage roll" height={400}></Image>
      </div>
      <p className="indent-8">
        It was great, good quality everything, but I felt the sausauge was a
        little thick and made the proportions a bit off.
      </p>
      <p className="indent-8">
        That night we had a reservation at{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://theblacklock.com/restaurants/blacklock-soho/"
        >
          Blacklock Soho
        </a>{" "}
        for a sunday roast. I spent a long time researching before what the best
        sunday roast to get was in London, and I landed on this place because I
        really wanted to find a place that had a nice communal serving for the
        family, rather than individual plates.
      </p>
      <div className="flex justify-center items-center my-6">
        <Image src={roast} alt="sunday roast" height={540}></Image>
      </div>
      <p className="indent-8">
        Pretty epic. Everything was super tasty and all you could ever want in a
        sunday roast. My only complaint is the lamb had a lot of gristle, but
        chewing is fun. Also the white chocolate cheesecake dessert was
        delicious.
      </p>
      <p className="indent-8">
        A couple nights later we went for dinner at{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://www.tayyabs.co.uk/"
        >
          Tayyabs
        </a>
        , a byob punjabi spot in East London. We brought stella tallboys and the
        cold light beer paired wonderfully with the spicy, spiced food. It was
        also incredibly cheap.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="h-96 overflow-hidden">
          <Image
            src={tayyabs1}
            alt="dining at tayyabs"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-96 overflow-hidden">
          <Image
            src={tayyabs2}
            alt="lamb chop at tayyabs"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="indent-8">
        We got the lamb chops and dry meat, as well as a load of garlic naan. I
        am salivating at the memory of it writing this.
      </p>
      <p className="indent-8">
        I am losing the chronological order of things, but we then had a great
        meal at{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://stjohnrestaurant.com/"
        >
          St. John Smithfield
        </a>
        . This was a meal I had been anticipating for a long time, through
        various youtube videos and following their instagram. For those of you
        who haven't checked it out, I recommend. The captions for their photos
        have to be the best food writing out there. Anyway, we had dinner in the
        dining room. I loved the ambience of the dining room. Lately, I have
        come to the realization that the only reason I go to restaurants is for
        the food, and decorations are completely unneccesary and probably just
        raise the cost of the meal. I think Asian restaurants understand this,
        as many of them I see are very bare bones. St. John had an eloquent but
        bare bones interior as well, nothing to distract from the food. The bar
        area looked like a great place to sink a pint.
      </p>
      <p className="indent-8">
        The food was all incredible, but some highlights for me were the famous
        bone marrow, these crabs in butter on special, the butterhead and lovage
        salad, the hare with this incredible sauce, and the greens they served.
        I really wanted to know what the greens were and how they prepared them.
        They seemed like a sort of boiled cabbage, but they had so much great
        flavor there had to be something else to them, maybe prepared in broth
        or something. Also, the puddings, can't forget the puddings. As said in
        the Instagram,{" "}
        <b>
          "Far from being a grudging afterthought, Fergus believes that puddings
          are fundamental. And so they occupy a section on the St. John menu at
          least as long as the preceding courses."
        </b>{" "}
        They were all incredible. The eccles cake with salty pungent cheese was
        such a great combo, the toffee cake with a little bit of ice cream I
        still think of. And incredibly fun one we had was sorbet with a shot of
        vodka to be poured on top or to be drunk "if the conversation was
        getting dry", says the waiter. You also have to get the madelines to go,
        my mom stuck them in her purse and we nibbled them on a car ride the
        next day. Everything there was just so pure and perfect and it seemed to
        embody everything a restaurant should be.
      </p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center my-6">
        <div className="w-full md:w-1/3 px-1 md:px-2 mb-4 md:mb-0">
          <Image src={bonemarrow} alt="bone marrow" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/3 px-1 md:px-2 mb-4 md:mb-0">
          <Image src={toffeecake} alt="toffee cake" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/3 px-1 md:px-2">
          <Image src={madelines} alt="madelines" className="w-full h-auto" />
        </div>
      </div>
      <p className="indent-8">
        We also ate at The Plimsoll, a hip bar I found via an also very eloquent
        Instagram (I am a sucker for those). I had been anticipating this for a
        long time also. Bar had a cool feel but also felt like something you
        would find in Williamsburg. This was pretty much the only real pub
        experience we had in England unfortunately as my parents don't like
        drinking. When the waiter came over I asked them what beers they had and
        he said "oh our house beer is nice", and that is the first I've heard of
        nice being used like that and I loved it, going up to a bar and asking
        for "whatever's nice". Also, the beer was fantastic, wheaty, savory,
        lager (i think). They had a few great items: the fried potatoes with a
        garlic aioli were a perfect bar snack, and the truffle pasta was
        delicious, but that is pretty hard to mess up. They were supposed to
        have the best burger in London, which I guess isn't saying much. It was
        an alright burger, but I think they tried to season the meat before they
        formed the patties - they had a sausage like homogenization and taste,
        which I think could have been from the salt mixing through the meat. So
        that was a little disappointing. We basically ended up ordering the
        whole menu, and my takeaway was that it just didn't feel like a coherent
        menu, the items felt eclectic. Also everything was pretty damn expensive
        for the portions you get.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center my-6">
        <div className="w-full md:w-1/2 px-1 md:px-2 mb-4 md:mb-0">
          <Image src={burger} alt="burger" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 px-1 md:px-2">
          <Image src={mousse} alt="mousse" className="w-full h-auto" />
        </div>
      </div>{" "}
      <p className="indent-8">
        It was a 5 minute walk from Emirates Stadium though which was pretty
        lit.
      </p>
      <p className="indent-8">
        The last big meal we had in London was at{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://bratrestaurant.co.uk/"
        >
          Brat
        </a>
        , specifically Brat's Climpson Arch. This is another big London
        restaurant, but we didn't get a reservation far enough in advance for
        the main location, so we had to go to this weird pop up venue that was
        under an arch. Aside, I love the chairs they have in Brat, my mom says
        they are called Thonet Bentwood but I can't find the specific one
        online. They have a large emphasis on open fire cooking, and they do
        most if not all of their cooking on it. I sat facing the grill and it
        was really entertaining to watch, my sister had to move seats though
        because she was grossed out by the chefs touching the food. I was really
        excited for the turbot that they prepare like they do in the{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://www.youtube.com/watch?v=gWhTglFhuv0"
        >
          Basque country
        </a>
        , as well as the ex-dairy cow with the yellow fat. All the apps we got
        were great, and we ended up getting both the steak and turbot. The steak
        was a little underwhelming: they didn't ask us how we wanted it cooked
        and it was really rare, which I am usually fine with but the steak had a
        lot of nice yellowish fat on it that was left kind of waxy instead of
        rendered due to how rare it was. Also, the meat was pretty chewy, but I
        don't know if that is just what is to be expected with ex-dairy cow.
        Still dogged it though. I think they should have sliced it a little
        thinner. The turbot was incredible, we devoured it. London has given me
        appreciation for whole fish cooking. It is really hard to justify
        spending 130 pounds on a fish though unless it is a really special
        occasion.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center my-6">
        <div className="w-full md:w-1/2 px-1 md:px-2 mb-4 md:mb-0">
          <Image src={turbot} height={500} alt="turbot"></Image>
        </div>
        <div className="w-full md:w-1/2 px-1 md:px-2">
          <Image src={bratmeal} height={400} alt="whole meal at brat"></Image>
        </div>
      </div>
      <p className="indent-8">
        Two restaurants we unfortunately didn't get to were
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://www.ritasdining.com/"
        >
          {" "}
          Rita's Dining
        </a>
        , which I know from
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://www.youtube.com/watch?v=-GWItHgAfPA"
        >
          {" "}
          this sick chef's night out video{" "}
        </a>{" "}
        and
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://www.youtube.com/watch?v=O5hNWSPMDpQ"
        >
          {" "}
          Willy's pies
        </a>
        , whose Instagram led me to a lot of the places I went on the trip. I
        also didn't get a great full english at a lowkey cafe (breakfast set),
        but I did get a pretty great one at an inn we were at in the Cotswolds.
        I also didn't get to go to{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://baolondon.com/"
        >
          Bao London
        </a>
        , but I had mixed feelings about it anyway.
      </p>
      <p className="indent-8">
        The last great food I got was from a chippy in the Cotswolds. I had been
        wanting all trip to go to a proper chippy and get some proper fried
        stuff with some curry sauce. I also really wanted to get a spice bag,
        but turns out that is a Dublin thing and you can't get it anywhere in
        England. The fish was perfect, the chips were perfect, and the curry
        sauce was banging. This meal helped inspire{" "}
        <a
          className="text-blue-500 underline hover:text-blue-700"
          href="https://www.youtube.com/watch?v=dB22Qf0vhn4"
        >
          this report
        </a>
        . I regret not ordering more, we were saving space for a pub at our
        final destination that ended up being pretty shitty.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center my-6">
        <div className="w-full md:w-1/2 px-1 md:px-2 mb-4 md:mb-0">
          <Image src={chips1} height={400} alt="eating chips"></Image>
        </div>
        <div className="w-full md:w-1/2 px-1 md:px-2">
          <Image src={chips2} height={400} alt="chips"></Image>
        </div>
      </div>
      <p className="indent-8 mb-4">
        England gets a bad rep with its food but its really quite great. I could
        eat at St. John every day for the rest of my life.
      </p>
      <i>November 25, 2023</i>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
    </div>
  );
}
