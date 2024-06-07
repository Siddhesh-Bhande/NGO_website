import NavButtons from "./NavButtons";

export default function NavBar({
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
      <NavButtons
        showAbout={showAbout}
        showPrograms={showPrograms}
      ></NavButtons>
    </div>
  );
}
