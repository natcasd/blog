import Link from "next/link";

export default function ParisMap() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Paris Food and Drink
        </h1>
      </div>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1DvTHWil34N_H8gULoKPVUqAvktqSrKc&ehbc=2E312F"
        style={{ width: "100%", height: "75vh" }}
      ></iframe>{" "}
    </div>
  );
}
