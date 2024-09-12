import Card from "@/components/Card";

function Services() {
  const cardData = [
    {
      Img: "/CSS.png",
      title: "Web Development",
      desc: "Offering custom, high-quality web and mobile app development services.",
    },

    {
      Img: "/flutter.png",
      title: "App Development",
      desc: "Offering custom, Dynamic high-quality mobile and web app development services. ",
    },

    {
      Img: "/github.png",
      title: "Maintinence & Support",
      desc: "Offering reliable maintenance, support, and custom web and mobile development.",
    },
  ];
  return (
    <>
      <section id="Services" className="relative bg-gray-900 h-auto ">
        <div className=" flex flex-col items-center">
          <h1 className="text-xl font-extrabold font-satoshi text-white sm:text-xl md:text-3xl lg:text-4xl mt-4">
            Expert Services.
          </h1>
          <span className="mt-2 text-teal-400 font-semibold text-lg">
            Awesome Features.
          </span>
        </div>
        <div className="cardData__style">
          {cardData.map((card, index) => (
            <Card
              key={index}
              Img={card.Img}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
