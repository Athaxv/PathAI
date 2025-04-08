import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <Header/>
      <div>
        <Hero/>
      </div>
    </div>
    </>
  );
}
