import { useEffect } from "react";
import DonateButton from "./DonateButton";

export default function Header({
  setShowAbout,
  showAbout,
  showPrograms,
  setShowPrograms,
}) {
  function AboutClickHandler() {
    setShowAbout(true);
    setShowPrograms(false);
  }

  function ProgramsClickHandler() {
    setShowPrograms(true);
    setShowAbout(false);
  }

  return (
    <div className="p-8 px-12">
      <div className="inline-block">
        <h1 className="col-span-5 text-5xl font-bold font-serif text-blue-600">
          Foundation 4 Change
        </h1>
        <h1 className="text-3xl text-slate-500 italic font-serif">
          "It Takes A Village"
        </h1>
      </div>
      <div className="float-right hidden lg:inline-block object-center">
        {showPrograms && (
          <>
            <button
              onClick={() => ProgramsClickHandler()}
              className="text-xl mr-4 px-4 hover:underline underline-offset-4 cursor-pointer mt-2 text-blue-500 underline"
            >
              &nbsp;Programs&nbsp;
            </button>
            <button
              onClick={() => AboutClickHandler()}
              className="text-xl mr-4 px-4 hover:underline underline-offset-4 cursor-pointer mt-2"
            >
              About
            </button>
          </>
        )}
        {showAbout && (
          <>
            <button
              onClick={() => ProgramsClickHandler()}
              className="text-xl mr-4 px-4 hover:underline underline-offset-4 cursor-pointer mt-2 "
            >
              &nbsp;Programs&nbsp;
            </button>
            <button
              onClick={() => AboutClickHandler()}
              className="text-xl mr-4 px-4 hover:underline underline-offset-4 cursor-pointer mt-2 text-blue-500 underline"
            >
              About
            </button>
          </>
        )}
        <DonateButton></DonateButton>
      </div>
    </div>
  );
}
