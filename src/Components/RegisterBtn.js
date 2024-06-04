export default function RegisterBtn({ smallBtn, BigBtn }) {
  return (
    <>
      {smallBtn && (
        <a
          target="blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScpasbeG84Gq2l6Euo2Tcg6N1gVqrkMfBkZbgT8JF0HXnLzUw/viewform?pli=1"
        >
          <button className="px-4 py-1 bg-blue-500 text-white float-right text-xl italic shadow-xl hover:-translate-x-1 rounded-md">
            Register Now !
          </button>
        </a>
      )}
      {BigBtn && <button>Register Now !</button>}
    </>
  );
}
