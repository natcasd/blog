import Link from "next/link";
import Image from "next/image";

export default function Blog2() {
  return (
    <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl">
      <div className="px-4 md:px-10 flex justify-center items-center mb-6">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <h1 className="text-xl md:text-3xl font-bold mb-6">
        A Discussion of Food Preparation Efficiency Across Cultures
      </h1>
      <p className="indent-8 mb-4">
        Something I have been thinking about recently is the cost of eating in
        America versus other countries, and the cheap food that is available to
        Americans versus elsewhere. It seems for the most part that cheap food
        in America does not exist unless it is chain fast food. There are a few
        examples that refute this, like diners, but I think by and large there
        is not cheap well prepared food in America, and the trend has definitely
        been away from it. I think the focus in America is more on show-stopping
        food, less on functionality.
      </p>
      <p className="indent-8 mb-4">
        I think this stems from the fact that eating out in America is seen as
        more of an event rather than just being functional. You go to a
        restaurant for a date, or for a dinner with friends, more so than just
        to feed yourself. This culture influences what restaurants serve - they
        want it to be flashy and in turn it costs a lot of money. This is a
        self-fulfilling cycle where restaurants are too expensive to just eat at
        regularly, so they serve the clientele of celebrations and serve fancy
        food.
      </p>
      <p className="indent-8 mb-4">
        Regardless of this culture, I think there are things that America can do
        to improve the efficiency of its food production, making it cheaper. The
        main source I look to here for inspiration is Asia, and specifically wok
        cooking, but I am sure there are other examples elsewhere. A quote that
        really drives the Asian (or specifically in Hong Kong) focus on
        efficiency in cooking is in a{" "}
        <a href="https://www.youtube.com/watch?v=ivaf-hCu9dM" className="text-blue-500 underline hover:text-blue-700">
          video
        </a>{" "}
        by Lucas Sin for Bon Appetit. He is talking to an owner of an outdoor
        seafood stall, and one of the takeaways is the way a restaurant makes
        more money in Hong Kong is by selling more dishes, not by charging more.
        This drive on selling more dishes forces restaurants to become more
        efficient, not become fancier, serving fancier dishes.{" "}
      </p>
      <p className="indent-8 mb-4">
        This drive is reflected in how the Asian restaurant kitchen is set up.
        Everything about it is optimized for efficiency. It is mise en place to
        an extreme, but also is reflected in cooking equipment. The wok is
        designed to cook food as fast as possible, utilizing extreme heat to
        cook food fast. Another example of the super efficient set up is the
        massive drains that are on the floor in most Japanese kitchens. Having
        this setup makes it much easier to clean, and also for draining water
        from food it is super easy, you just dump it on the ground. ChatGPT says
        it is called a nagashi, but I can't find anything else on it.
      </p>
      <p className="indent-8 mb-4">
        In terms of the actual food being prepared, there is also an emphasis on
        efficiency. The whole setup of cooking where carbs are mostly given in
        the form of white rice is extremely efficient. Out of all of the carbs
        that people eat, rice is probably the easiest to prepare. This allows
        the focus to be spent on the dishes supplementing the rice, and even
        with the focus on them, they are also optimized for efficiency. A lot of
        dishes can be thrown together in a wok in a short matter of minutes,
        allowing for a meal to be prepared extremely fast.
      </p>
      <p className="indent-8 mb-4">
        I think American kitchens could learn a lot from the efficiency of Asian
        kitchens, and there is definitely some alpha to capture with this. If an
        American kitchen is implemented much more efficiently, it can keep its
        costs down compared to competitors, and this can drive demand for it,
        even if the food isn't absolutely showstoppingly spectacular.
      </p>
      <p className="indent-8 mb-4">
        I think this could happen through increased thought into the design of
        menus, really thinking about how something could be produced with
        optimum efficiency, freeing up time (and therefore money!) I also think
        for cleaning practices, the nagashi/drain implemented in restaurant
        kitchens would be very useful.
      </p>
      <p className="indent-8 mb-4">
        Also in Asia there is more specialization in terms of what restaurants
        serve. Usually in Asia, restaurants will be much more focused on a
        specific dish or series of dishes. This allows the restaurant to really
        focus on the quality of the thing it is they produce, optimizing it for
        the best taste and easiest production. The abundance of selection in
        American restaurants causes production to get clogged up, and there to
        not be enough focus on a specific dish. I am not sure if this is just
        the American palate that desires choice, or if it just random that
        American restaurants serve so many things. It could stem from the fact
        that Americans will usually order individual entrees when they go out,
        rather than sharing stuff family style, and thus there needs to be more
        choices. The ordering of individual entrees does not make sense to me
        either, I find it a much more pleasurable experience to eat communally.
      </p>
      <p className="indent-8 mb-4">
        I know I kind of rambled a lot here, but I guess the main point I am
        trying to get across is how Asian cooking is much more efficient than
        American, which allows it to be so much cheaper, and also how hopefully
        American cooking could learn from this.
      </p>
      <p className="indent-8 mb-4">
        Some things that really developed my thinking here were watching videos
        of chefs cooking in Japan.{" "}
        <a href="https://www.youtube.com/watch?v=X1Alc4SUqLU" className="text-blue-500 underline hover:text-blue-700">
          This
        </a>{" "}
        video exemplifies it. One dude able to cook and serve to everyone.
      </p>
      <i className="block mt-6">April 15, 2024</i>
      <div className="px-4 md:px-10 flex justify-center items-center mt-6"> 
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">Go back Home</Link>
      </div>
    </div>
  );
}
