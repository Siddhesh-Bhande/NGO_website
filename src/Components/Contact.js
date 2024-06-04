import ContactForm from "./ContactForm";

export default function Contact() {
  const contactDetails = {
    type: "Primary Contact Person",
    FullName: "Darryl D. Barber",
    Title: "Programs Director",
    Cell: "443-484-6095",
    email: "Thefoundation4change@outlook.com",
  };
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 p-12 ">
        <h1 className="text-4xl font-bold font-serif text-blue-600">Contact</h1>
        <h1 className="font-bold text-3xl text-slate-700 mt-2">
          {contactDetails.FullName}
        </h1>
        <h2 className="font-bold text-xl text-slate-700 mt-2">
          {contactDetails.Title}
        </h2>
        <h2 className="font-bold text-xl text-slate-700 mt-2">
          {contactDetails.email}
        </h2>
        <h2 className="font-bold text-xl text-slate-700 mt-2">
          Cell : {contactDetails.Cell}
        </h2>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}
