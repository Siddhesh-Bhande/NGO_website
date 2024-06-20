import StemImg from "../Assets/STEM.png";
import CircleImg from "./CircleImg";
import DanceImg from "../Assets/childrenDancing.webp";
import MathImg from "../Assets/math.webp";
import Lifeskills from "../Assets/lifeskills.webp";
import PEImg from "../Assets/PE.webp";
import MusicImg from "../Assets/music.webp";
import RegisterBtn from "./RegisterBtn";

export default function ProgramTypes() {
  const programs = [
    {
      imgurl: DanceImg,
      progid: 1,
      program: "Dance Dynamics",
      heading: "Move, Express, Unite!",
      description:
        "Dive into dance to boost your coordination, express your creativity, and build teamwork through the art of movement.",
    },
    {
      imgurl: StemImg,
      progid: 2,
      program: "STEM Explorations",
      heading: "Innovate and Solve!",
      description:
        "Spark your curiosity and innovation with hands-on STEM activities that challenge your problem-solving skills.",
    },
    {
      imgurl: MathImg,
      progid: 3,
      program: "Reading and Math Mastery",
      heading: "Boost Your Brainpower!",
      description:
        "Enhance your reading and math skills with personalized tutoring designed to pave the way for academic success.",
    },
    {
      imgurl: Lifeskills,
      progid: 4,
      program: "Life Skills Lab",
      heading: "Prepare for Your Future!",
      description:
        "Gain essential life skills through interactive workshops on communication, financial savvy, and career planning.",
    },
    {
      imgurl: MusicImg,
      progid: 5,
      program: "Music Arts Studio",
      heading: "Harmonize and Create!",
      description:
        "Explore a world of sounds as you learn different instruments and music styles, developing your unique artistic voice.",
    },
    {
      imgurl: PEImg,
      progid: 6,
      program: "Physical Education Program",
      heading: "Get Active, Stay Fit!",
      description:
        "Build strength, motor skills, and team spirit through engaging and structured physical activities.",
    },
  ];

  return (
    <div className="ProgramTypes place-self-center p-4 lg:px-20 m-auto grid lg:grid-cols-2 gap-8">
      {programs.map((prog) => (
        <div
          key={prog.progid}
          className="shadow-md col-span-1 rounded-md p-4 hover:border-2 hover:border-blue-600"
        >
          <div className="grid grid-cols-5 place-self-center rounded-md">
            <CircleImg imgurl={prog.imgurl}></CircleImg>
            <div className="pl-4 lg:pl-0 col-span-4">
              <h1 className="text-2xl font-serif font-bold">{prog.program}</h1>
              <h2 className="italic text-gray-500">{prog.heading}</h2>
              <h3>{prog.description}</h3>
              <RegisterBtn smallBtn={true}></RegisterBtn>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
