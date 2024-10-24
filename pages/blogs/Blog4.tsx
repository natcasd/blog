import Link from "next/link";

export default function Blog4() {
  return (
    <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl">
      <div className="px-4 md:px-10 flex justify-center items-center mb-6">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold mb-4">A memory from Madrid</h1>
      </div>
      <p className="indent-8 mb-4">
        We were bar hopping and happened upon a cool looking bar with cool
        looking people. We had been drinking beer all night, I thought finally
        this is the place for a <i>gíntonica</i>. The bartender made them in the
        bulbous wine glasses with a slice of some citrus I'm forgetting. The
        drinks came with trail mix that had gummy worms in it. We enjoyed them
        sitting in recycled seats from an airplane.
      </p>
      <i className="block mt-6 text-center">May 13, 2024</i>
    </div>
  );
}

