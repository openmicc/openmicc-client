import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full bg-blue-100 flex justify-between">
      <Link href="/">
        <a className="underline text-blue-700 my-1 mx-2">Back to home</a>
      </Link>
      <h1 className="text-black text-xl font-bold ">Openmi.cc</h1>
      <p className="my-1 mx-2 text-blue-400">navbar</p>
    </div>
  );
}
