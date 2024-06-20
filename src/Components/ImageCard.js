export default function ImageCard({ imgurl }) {
  return (
    <div>
      <img className="h-full p-4 xl:p-10" src={imgurl}></img>
    </div>
  );
}
