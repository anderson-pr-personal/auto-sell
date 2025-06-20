import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <Link href={"/home/dashboard"} className="text-black">Inicio</Link>
    </div>
  );
}
