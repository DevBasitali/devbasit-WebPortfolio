"use client";
import Alert from "@/components/Alert";
import Image from "next/image";
import { useState } from "react";

function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, msg }),
      });

      const data = await res.json();
      console.log(data);
      if (data.message) {
        Response(data.message);
        setTimeout(() => {
          setAlert(null);
        }, 2000);
        setName("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Validate form fields
  //   if (!name || name.trim() === '') {
  //     setAlert('Please enter your name.');
  //     return;
  //   }
  
  //   if (!email || !validateEmail(email)) {
  //     setAlert('Please enter a valid email address.');
  //     return;
  //   }
  
  //   if (!msg || msg.trim() === '') {
  //     setAlert('Please enter a message.');
  //     return;
  //   }
  
  //   try {
  //     const res = await fetch('/api/auth/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, email, msg }),
  //     });
  
  //     if (res.ok) {
  //       const data = await res.json();
  //       setAlert(data.message);
  //       setTimeout(() => {
  //         setAlert(null);
  //       }, 2000);
  //       setName('');
  //       setEmail('');
  //       setMsg('');
  //     } else {
  //       const error = await res.json();
  //       setAlert(error.message || 'An error occurred. Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setAlert('An error occurred. Please try again later.');
  //   }
  // };
  
  // Helper function to validate email
  // function validateEmail(email) {
  //   // Add your email validation logic here
  //   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  // }

  return (
    <>
      <section className=" cta_section relative w-full h-screen" id="contactUs">
        <Image
          src="/backgrounds/heroBg.svg"
          alt="Call to Action Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="-z-10 opacity-99"
        />
        <div className="cardmorphism w-[80%] lg:w-[30%] ">
          <h1 className="text-4xl font-bold text-teal-600 flex justify-center my-4">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Full name"
              onChange={(e) => setName(e.target.value)}
              className="input_text placeholder:text-black"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mt-5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input_text placeholder:text-black"
            />
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mt-5"
            >
              Message
            </label>

            <textarea
              id="message"
              placeholder="Enter your message here"
              onChange={(e) => setMsg(e.target.value)}
              className="input_text w-full placeholder:text-black"
              rows={4}
            />
            {alert && <Alert title="Sucess" desc={alert} />}

            <button className="btn_primary active:text-opacity-75 sm:w-auto text-md">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default CTA;
