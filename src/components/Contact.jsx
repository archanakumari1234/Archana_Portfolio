import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";

const Contact = () => {

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");


  const handleSend = (e) =>{
     e.preventDefault();
     if(username === ""){
      setErrMsg('Username is required!')
      setTimeout(() => {
        setErrMsg('')
      }, 3000);
     }else if(phone === ""){
      setErrMsg("Phone Number is required!")
     }
     else if(email === ""){
      setErrMsg("Email is required!")
     }
     else if(subject === ""){
      setErrMsg("Subject is required!")
     }
     else if(message === ""){
      setErrMsg("Please give the message!")
     }
     else{
      console.log(username, phone, email, subject, message);
      setUsername("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setErrMsg("");
     }
  }
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center">
        <Title desc="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto md:flex justify-between items-center">
          <ContactLeft />
          <div className="md:w-[60%] h-auto flex flex-col md:mt-0 mt-10  gap-8 justify-between bg-blue-600 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-6">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-designColor text-base tracking-wide animate-bounce ">{errMsg}</p>
              )}
             
              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    YOUR NAME
                  </p>
                  <input onChange={(e)=>setUsername(e.target.value)} value={username} className={`${errMsg==="Username is required!" && "outline-designColor"} contactInput`} type="text" />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    phone number
                  </p>
                  <input onChange={(e)=>setPhone(e.target.value)} value={phone} className={`${errMsg === 'Phone Number is required!' && 'outline-designColor'} contactInput`} type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  email
                </p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email}  className={`${errMsg === "Email is required!" && "outline-designColor"} contactInput`} type="email" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  subject
                </p>
                <input onChange={(e)=>setSubject(e.target.value)} value={subject}  className={`${errMsg === "Subject is required!" && "outline-designColor"} contactInput`} type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  message
                </p>
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message}  id="" cols="30" rows="8" className={`${errMsg === "Please give the message!" && "outline-designColor"} contactTextareaInput`}></textarea>
              </div>
              <div className="w-full">
                <button onClick={handleSend} className="w-full h-12 uppercase rounded-lg text-gray-400 text-base tracking-wider bg-[#141518] hover:text-white px-4 hover:border-[2px] hover:border-designColor border-transparent ">Send Message</button>
             
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
