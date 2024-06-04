export default function ContactForm() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold font-serif mt-8 text-blue-600">
          Send your query
        </h1>
        <form>
          <div>
            <div className="p-4 pr-8 font-bold font-serif text-xl text-slate-700">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                className="h-16 w-full p-2 mt-2 bg-gray-300 border-2 border-gray-600 rounded-md focus:bg-white hover:bg-gray-100 hover:border-blue-500"
              />
            </div>
            <div className="p-4 pr-8 font-bold font-serif text-xl text-slate-700">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="h-16 w-full p-2 mt-2 bg-gray-300 border-2 border-gray-600 rounded-md focus:bg-white hover:bg-gray-100 hover:border-blue-500"
              />
            </div>
            <div className="p-4 pr-8 font-bold font-serif text-xl text-slate-700">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                className="h-28 w-full p-2 mt-2 bg-gray-300 border-2 border-gray-600 rounded-md focus:bg-white hover:bg-gray-100 hover:border-blue-500"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 px-8 ml-4 mb-4 py-2 rounded-md text-2xl hover:border-2 hover:border-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
