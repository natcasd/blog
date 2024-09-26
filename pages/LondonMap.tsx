import Link from "next/link";

export default function LondonMap() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          London Food and Drink
        </h1>
      </div>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=14FrQS75c5F64X4R0l0ZDtrxeVzrXrCs&hl=en&ehbc=2E312F"
        style={{ width: "100%", height: "75vh" }}
      ></iframe>
    </div>
  );
}
