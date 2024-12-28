import Link from "next/link";
import styles from "./Blog1.module.css";

export default function RecentReads() {
  return (
    <div>
      <div className="px-4 md:px-10 flex justify-center items-center">
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back Home
        </Link>
      </div>{" "}
      <div className="max-w-lg mx-auto">
        <h1 className="text-xl font-bold text-center mb-4">Reads</h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>The Stranger</strong> <em>Albert Camus</em>
          </li>
          <li>
            <strong>To Have and Have Not</strong> <em>by Ernest Hemingway</em>
          </li>
          <li>
            <strong>The Beautiful and Damned</strong>{" "}
            <em>by F. Scott Fitzgerald</em>
          </li>
          <li>
            <strong>The Great Gatsby</strong> <em>by F. Scott Fitzgerald</em>
          </li>
          <li>
            <strong>reread the college part of This Side of Paradise</strong>{" "}
            <em>by F. Scott Fitzgerald</em>
          </li>
          <li>
            <strong>Love in the Time of Cholera</strong>{" "}
            <em>by Gabriel García Márquez</em>
          </li>
          <li>
            <strong>Great Expectations</strong> <em>by Charles Dickens</em>
          </li>
          <li>
            <strong>Typhoid Mary</strong> <em>by Anthony Bourdain</em>
          </li>
          <li>
            <strong>Until August</strong> <em>by Gabriel García Márquez</em>
          </li>
          <li>
            <strong>
              The Raw and the Coooked: Adventures of A Roving Gourmand
            </strong>{" "}
            <em>by Jim Harrison</em>
          </li>
          <li>
            <strong>One Hundred Years of Solitude </strong>
            <em>by Gabriel García Márquez</em>
          </li>
          <li>
            <strong>Heart of Darkness</strong> <em>by Joseph Conrad</em>
          </li>
          <li>
            <strong>A Cook's Tour</strong> <em>by Anthony Bourdain</em>
          </li>
          <li>
            <strong>Medium Raw</strong> <em>by Anthony Bourdain</em>
          </li>
          <li>
            <strong>Of Mice and Men</strong> <em>by John Steinbeck</em>
          </li>
          <li>
            <strong>The Great Gatsby</strong> <em>by F. Scott Fitzgerald</em>
          </li>
        </ul>
      </div>
    </div>
  );
}
