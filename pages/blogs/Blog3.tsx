import Image from "next/image";
import Link from "next/link";
import hotdog1 from "../images/hotdog1.jpg";
import hotdog2 from "../images/hotdog2.jpg";
import hotdog3 from "../images/hotdog3.jpg";

export default function Blog3() {
  return (
    <div className="px-4 md:px-16 lg:px-12 mx-auto max-w-4xl">
      <div className="px-4 md:px-10 flex justify-center items-center mb-6">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Eureka!</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src={hotdog1}
            alt="Hotdog 1"
            width={400}
            height={300}
            className="w-full h-auto"
      
          />
          <Image
            src={hotdog2}
            alt="Hotdog 2"
            width={400}
            height={300}
            className="w-full h-auto"
          />
          <Image
            src={hotdog3}
            alt="Hotdog 3"
            width={412}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      <i className="block mt-6 text-center">April 30, 2024</i>
    </div>
  );
}
