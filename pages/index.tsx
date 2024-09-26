import Link from "next/link";
import Image from "next/image";
import profile from "./images/profile.jpg";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full py-8">
      <h1 className="text-4xl font-bold mb-8">Nathan's Website</h1>
      <div className="mb-8 w-full max-w-xl px-4">
        <Image
          src={profile}
          alt="profile"
          layout="responsive"
          width={600}
          height={600}
          className="w-full"
        />
      </div>
      <div className="flex justify-center items-start mb-4 w-full">
        <div className="flex space-x-12 text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Blog Posts</h2>
            <div className="flex flex-col items-center space-y-0.1">
              <Link
                href="/Blog1"
                className="text-blue-500 underline hover:text-blue-700"
              >
                England Blog
              </Link>
              <Link
                href="/Blog2"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Cost of Eating Out
              </Link>
              <Link
                href="/Blog3"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Eureka!
              </Link>
              <Link
                href="/Blog4"
                className="text-blue-500 underline hover:text-blue-700"
              >
                A memory from Madrid
              </Link>
              <Link
                href="/Blog5"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Vehicles for Drinking
              </Link>
              <Link
                href="/Blog6"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Camping!
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Maps</h2>
            <div className="flex flex-col items-center space-y-0.1">
              <Link
                href="/LondonMap"
                className="text-blue-500 underline hover:text-blue-700"
              >
                London
              </Link>
              <Link
                href="/BarcelonaMap"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Barcelona
              </Link>
              <Link
                href="/ParisMap"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Paris
              </Link>

              <Link
                href="/NYCMap"
                className="text-blue-500 underline hover:text-blue-700"
              >
                NYC
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
            <div className="flex flex-col items-center space-y-0.1">
              <Link
                href="/DaddiesNYC"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Daddies NYC Review
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <h1 className="mr-2 text-xl">-----------------&gt;</h1>
        <AwesomeButton type="danger" href="/RecentReads">
          Reads
        </AwesomeButton>
      </div>
    </div>
  );
}
