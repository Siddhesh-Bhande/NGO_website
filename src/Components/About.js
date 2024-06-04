import ImageCard from "./ImageCard";
import Members from "./Members";
import TextCard from "./TextCard";
import MissionImg from "../Assets/mission2.jpg";
import VisisonImg from "../Assets/vision2.jpg";

export default function About() {
  const content = [
    {
      heading: "Mission",
      imgurl: MissionImg,
      description:
        "The fundamental principles of Foundation 4 Change revolve around nurturing secure, affectionate family and community-focused ways of life. We prioritize upholding honesty, cultivating a safe and healthy social atmosphere, and nurturing integrity. Our mission is to enhance the self-esteem of every child while empowering them with essential self-care abilities. We aim to refine their individual and interpersonal social competencies, while also fostering appreciation for cultural differences. Additionally, we offer assistance with homework, tutoring, and various educational skills to support their learning journey.",
    },
    {
      heading: "Vision",
      imgurl: VisisonImg,
      description:
        "Foundation 4 Change envisions actively involving, connecting, and uplifting the communities in Baltimore City facing the most severe challenges of poverty and resource scarcity. Our focus is on engaging both school-age children and their parents through targeted programs. Our flagship initiative, 'It Takes A Village' operates for 36 weeks during the academic year and for 2 months during summer break. We extend our community outreach through our after-school program, running from Monday to Friday, 3:00 pm to 7:00 pm, and our summer schedule, from Monday to Friday, 9:00 am to 3:00 pm. Our comprehensive program encompasses a diverse range of activities, including dance, STEM, life skills, team sports, and more, aiming to provide enriching educational experiences, foster fun, and promote healthy lifestyles.",
    },
  ];

  return (
    <div className="p-12">
      <div className="grid grid-cols-2 text-justify">
        <TextCard
          className="col-span-1"
          heading={content[0].heading}
          description={content[0].description}
        ></TextCard>
        <ImageCard imgurl={content[0].imgurl}></ImageCard>
      </div>
      <div className="grid grid-cols-2 text-justify">
        <ImageCard imgurl={content[1].imgurl}></ImageCard>
        <TextCard
          className="col-span-1"
          heading={content[1].heading}
          description={content[1].description}
        ></TextCard>
      </div>
      <div className="grid sm:grid-cols-3 gap-12 lg:mx-12 grid-cols-1">
        <h1 className="font-serif font-bold text-3xl text-center col-span-3 border-t-2 border-slate-200 mt-8 pt-8">
          Members
        </h1>
        <Members></Members>
      </div>
    </div>
  );
}
