import { Mail, MapPinIcon, Phone } from "lucide-react";
import React from "react";
import ContactUsForm from "../components/ContactUsForm";

const ContactPage = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-t from-white to-orange-100/90 flex items-center justify-center">
        <div className="max-w-6xl w-full px-4 space-y-12">
          <div className="flex justify-center">
            {/* Get In Touch */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-6xl tracking-tight font-bold mt-20">
                Get in Touch
              </h1>
              <p className="text-lg tracking-tight max-w-4xl mt-8 mb-6">
                Have questions? we would love to hear from you. Send us a
                message and we will respond as soon as possible.
              </p>
              <div className="flex ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  {/* Phone Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <Phone className="w-12 h-10 text-[#f49c00] mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <Mail className="w-12 h-10 text-[#f49c00] mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">support@datape.com</p>
                    <p className="text-gray-600">sales@datape.com</p>
                  </div>

                  {/* Office Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <MapPinIcon className="w-12 h-10 text-[#f49c00] mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Office</h3>
                    <p className="text-gray-600">123 Data Street</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-32">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
