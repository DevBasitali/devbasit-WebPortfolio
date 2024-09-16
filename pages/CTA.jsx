'use client';
import Alert from "@/components/Alert";
import Image from "next/image";
import { useState } from "react";

function CTA() {
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [msg, setMsg]=useState('');
const [alert, setAlert]=useState(null)
// console.log(name + email + msg);
const handleSubmit=async(e)=>{
e.preventDefault();
try {
  const res = await fetch('/api/auth/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name,email, msg }), // Sending the name to the API
  });

  const data = await res.json();
  // setResponse(data.message);
  console.log(data)
  if (data.message) {
    setAlert(data.message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    setName('');
    setEmail('');
    setMsg('');
  }

} catch (error) {
  console.error('Error:', error);
}
}
  return (
    <>
      <section className="cta_section relative w-full h-screen" id="contactUs">
      <Image
        src='/backgrounds/contactBg.svg'
        alt="Call to Action Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        className="-z-10"
      />
      
        <div className="cardmorphism w-2/6">
          <form 
          onSubmit={handleSubmit}
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMsg(e.target.value)}
              className="input_text w-full"
              rows={4}
            />
            {alert && <Alert title="Form Submitted" desc={alert}/>}

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
