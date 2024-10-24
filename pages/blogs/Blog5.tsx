import Link from "next/link";
import Image from "next/image";
import britishpint from "../images/pintglass.jpg";
import americanpint from "../images/americanpintglass.jpg";
import cana from "../images/cana.jpg";
import trainspotting from "../images/trainspottingpub.jpg";

export default function Blog5() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Vehicles for drinking
        </h1>
      </div>
      <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl py-4">
        <p className="indent-8 mb-4">
          Americans have once again got it all wrong.
        </p>
        <p className="indent-8 mb-4">
          Those who have gone out with me should already be well-acquainted to
          this subject from my frequent and long rants. Drinks are so much more
          satisfying out of thin glasses, with thin bottoms, rather than the
          chunky behemoths Americans are so fond of.
        </p>
        <p className="indent-8 mb-4">
          The most stark difference that illustrates what I am talking about is
          between the British pint and the American pint. The characteristic
          difference between the two is the British one will have a bead on the
          top, the bulge you so often see. However, while the bead is
          aesthetically pleasing, the true difference and superiority lies in
          the average thickness of the British pint glass, and importantly, the
          thickness of the bottom of the pint glass. While American pint glasses
          will be thick on the sides and even thicker on the bottom, British
          pint glasses will have a basically uniform thickness on the sides and
          the bottom. The British pint glass is pictured on the left, and
          American on the right.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <div className="w-full md:w-1/2 px-1 md:px-2 mb-4 md:mb-0">
            <Image src={britishpint} height={400} alt="british pint" />
          </div>
          <div className="w-full md:w-1/2 px-1 md:px-2">
            <Image src={americanpint} height={400} alt="american pint" />
          </div>
        </div>

        <p className="indent-8 mb-4">
          "Why is this so desired?" you might ask. It plays an incredible
          difference in the satisfaction in taking sips, and gulps. I am
          basically just completely postulating as to why&mdash;I just know I
          vastly prefer it, but I think it has to do with three things. First, I
          want to put the minimum amount of effort into consuming my beer, and
          having the glass weigh the minimum amount possible makes the effort of
          lifting the glass that much easier and that much less of something you
          have to think about. Second, I find one of the main differences is in
          the satisfaction I get after taking a swig out of the glass. I think
          this may have to do with the noticeability of difference in weight
          before and after the swig. If the glass that the beer is poured in is
          lighter, the beer takes up more of the total weight of the drink, so
          when there is a reduction of the amount of beer in the glass, it is
          more noticeable. Also, I think the contact your lips makes with the
          glass when taking a sip is more comfortable with thinner glasses.
          Again, this is all just hypothesis based on my own observation.
        </p>
        <p className="indent-8 mb-4">
          I also noticed the prevalence of thin glasses in Spain. When ordering
          cañas, they would come in these thin, sometimes wide, sometimes narrow
          glasses that I loved. Vermouths would also be served in them.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <div className="w-full md:w-1/2 px-1 md:px-2">
            <Image src={cana} height={400} alt="american pint" />
          </div>
        </div>

        <p className="indent-8 mb-4">
          The ultimate when it comes to this drinking experience can be found in
          Japanese highball glasses. Although, there is a popular brutish mug
          type glass that highballs will be served in in izakayas, in higher end
          places I believe it is common to see these ultra-thin{" "}
          <a
            href="https://www.amazon.com/Sasaki-G096-T285-Highball-Authentic-Dishwasher/dp/B09DXY64QP?th=1"
            className="text-blue-500 underline hover:text-blue-700"
          >
            glasses
          </a>
          . These are as thin as possible, so they achieve the peak experience
          of drinking for all of the aforementioned reasons. The satisfaction of
          drinking out of these is well depicted by this popular tiktoker.
        </p>
        <div className="flex justify-center my-8">
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/gNdCgHEJELw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="indent-8 mb-4">
          All in all, I'm just tryna get like this.
        </p>
        <div className="flex flex-col justify-center items-center my-6">
          <div className="md:px-2">
            <Image src={trainspotting} alt="pub scene" />
          </div>
        </div>

        <i>June 26, 2024</i>
      </div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
    </div>
  );
}
