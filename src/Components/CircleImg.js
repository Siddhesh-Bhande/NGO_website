export default function CircleImg({ imgurl }) {
  return (
    <img
      className="h-20 md:h-32 md:w-32 col-span-1 rounded-full"
      src={imgurl}
    ></img>
  );
}
