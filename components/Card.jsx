import Image from "next/image";

export default function Card({ Img, title, desc }) {

  return (
    <>
      <div className="pt-5 pb-10">
        <div className="card__style ">
          <Image src={Img} alt="" width={120} height={100} />
          <h1 className="text-white mt-4 font-bold text-xl">{title}</h1>
          <p className="text-gray-300 mt-4 px-6 text-center">{desc} </p>
        </div>
      </div>
    </>
  );
}
