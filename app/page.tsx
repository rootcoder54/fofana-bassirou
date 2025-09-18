import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full lg:w-4xl xl:w-5xl mx-auto">
      <div className="bg-white flex-grow shadow-lg">
        <Navbar />
      </div>
    </div>
  );
}
