import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <div className="bg-green-200">
      <Navbar />
      <div className="grid h-screen place-content-center">
        <h1 style={{ textSize: 24 }} className="text-bold text-2xl">
          Welcome
        </h1>
      </div>
    </div>
  );
}
