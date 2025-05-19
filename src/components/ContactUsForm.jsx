import React, { useState } from "react";
import ContactUs from "../assets/contact-us.png";
import { Building2, Mail, MessageCircle, Send, User } from "lucide-react";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" flex items-center justify-center mb-32 ">
      <div className="grid grid-cols-2 gap-6 max-w-6xl w-full bg-white  p-2 rounded-lg shadow-lg shadow-zinc-800/30">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={ContactUs}
            className="object-contain h-full w-full rounded-lg flex items-center justify-center"
          ></img>
        </div>

        {/* Form Section */}
        <div className="p-4">
          <h2 className="text-4xl tracking-tight font-bold mb-6">
            Send Us a Message
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1 flex items-center border border-gray-300 rounded-md p-2">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 flex items-center border border-gray-300 rounded-md p-2">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1 flex items-start border border-gray-300 rounded-md p-2">
                <MessageCircle className="h-5 w-5 text-gray-400 mr-2" />
                <textarea
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full outline-none resize-none"
                  rows="3"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#f49c00] text-white py-2 rounded-md flex items-center justify-center hover:bg-[#f5a600] transition"
            >
              <Send className="h-5 w-5  mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
