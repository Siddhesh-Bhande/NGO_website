export default function TextCard({ heading, description }) {
  return (
    <div className="md:p-12 p-4">
      <h1 className="mb-4 text-3xl font-bold font-serif text-center w-full">
        {heading}
      </h1>
      <div>{description}</div>
    </div>
  );
}
