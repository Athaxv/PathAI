import Feature from "@/components/Feature";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
    <div>
      <Header/>
      <div>
      <div className="relative h-full w-full bg-black">
  {/* Background Grid Layer */}
  <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
  
  {/* Hero Content Layer */}
  <div className="relative z-10">
    <Hero />
    <Feature/>
  </div>
  </div>
      </div>
    </div>
    </>
  );
}
