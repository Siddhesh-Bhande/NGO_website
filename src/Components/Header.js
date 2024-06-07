import Logo from "../Assets/Logo.jpg";
import NavBar from "./NavBar";

export default function Header({
  setShowAbout,
  showAbout,
  showPrograms,
  setShowPrograms,
}) {
  return (
    <div className="p-8 px-12">
      <div className="inline-block">
        <img
          src={Logo}
          className="h-32 w-32 float-left mr-2"
          alt="foundation 4 change logo"
        ></img>
        <h1 className="col-span-5 text-5xl font-bold font-serif text-blue-600">
          Foundation 4 Change
        </h1>
        <h1 className="text-3xl text-slate-500 italic font-serif">
          "It Takes A Village"
        </h1>
      </div>
      <NavBar
        showAbout={showAbout}
        showPrograms={showPrograms}
        setShowAbout={setShowAbout}
        setShowPrograms={setShowPrograms}
      ></NavBar>
    </div>
  );
}
