import Image from "next/image";

function CTA() {
  return (
    <>
      <section className="cta_section relative w-full h-screen" id="contactUs">
      <Image
        src='/ctaBg.jpg'
        alt="Call to Action Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="-z-10"
      />
      
        <div className="cardmorphism w-2/6">
          <form
          // onSubmit={handleSubmit}
          >
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="fullname"
              // value={fullname}
              // onChange={(e) => setFullname(e.target.value)}
              className="input_text"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mt-5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="input_text"
            />
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black mt-5"
            >
              Message
            </label>

            <textarea
              id="message"
              placeholder="Enter your message here"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              className="input_text w-full"
              rows={4}
            />

            <button
              // type="submit"
              className="btn_primary active:text-opacity-75 sm:w-auto text-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default CTA;
