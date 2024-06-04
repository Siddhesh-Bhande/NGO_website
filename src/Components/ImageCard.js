export default function ImageCard({ imgurl }) {
  return (
    <div>
      <img className="h-full p-10" src={imgurl}></img>
    </div>
  );
}
