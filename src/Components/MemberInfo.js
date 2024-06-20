export default function MemberInfo({ type, name, title, cell }) {
  return (
    <div className="md:col-span-1 col-span-3 shadow-md p-8 pt-2 hover:border-4 hover:border-blue-600 rounded-md text-center text-slate-600 transition">
      <h2 className="text-left font-bold italic text-gray-400 min-h-8">
        {type}
      </h2>
      <h1 className="border-y-2 border-slate-200 text-4xl font-serif py-4">
        {name}
      </h1>
      <h2 className="text-2xl font-serif">{title}</h2>
      <h2 className="text-2xl font-serif">{cell}</h2>
    </div>
  );
}
