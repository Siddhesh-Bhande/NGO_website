export default function Footer({
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
    <div className="p-4 md:p-12 text-bs md:text-lg">
      <div className="grid grid-cols-10 gap-6">
        <h1 className="col-span-5 text-3xl font-bold font-serif">
          Foundation 4 Change
        </h1>
        <h2 className="col-span-2 text-2xl mt-1">About</h2>
        <h2 className="col-span-3 text-2xl mt-1">Programs</h2>
      </div>
      <div className="grid grid-cols-10 gap-6 mt-2 grid-rows-3 ">
        <div className="col-span-5 row-span-2">
        <p><b>1826 Pennsylvania Ave</b></p>
        <p><b>Baltimore, MD 21217</b></p>
        <p><b>PO Number 12648</b></p>
        </div>
        <div className="grid grid-cols-1 col-span-2 row-span-2">
          <a
            className="col-span-1 cursor-pointer text-blue-500 underline underline-offset-4 hover:text-blue-800 transition"
            onClick={() => AboutClickHandler()}
          >
            Our Vision
          </a>
          <a
            href="https://donate.stripe.com/dR6fZU6J2ey1dig9AA"
            className="col-span-1 cursor-pointer text-blue-500 underline underline-offset-4 hover:text-blue-800 transition"
          >
            Donate
          </a>
        </div>
        <div className="grid grid-cols-1 row-span-3 col-span-3">
          <a
            className="col-span-1 cursor-pointer text-blue-500 underline underline-offset-4 hover:text-blue-800 transition"
            onClick={() => ProgramsClickHandler()}
          >
            Summer Program
          </a>
          <a className="col-span-1 cursor-pointer text-blue-500 underline underline-offset-4 hover:text-blue-800 transition">
            Year Round Program
          </a>
          <a className="col-span-1 underline underline-offset-4 transition">
            Upcoming Programs
          </a>
        </div>
      </div>
    </div>
  );
}
