import {
    FaArrowCircleRight,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black h-[400px]">
        <div className="flex items-center justify-center pt-20 gap-10 text-white container mx-auto">
          <div className="w-[35%] space-y-5">
            <h1 className="text-3xl font-bold">Creator Brief</h1>
            <p className="w-[90%] text-gray-300">
              Authentic Job Bulletins for Influencer. Friendly for brands to
              create campaign.
            </p>
            <h1 className="text-xl font-semibold">Social Media</h1>
            <div className="flex gap-5">
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaFacebook size={25} />
                </div>
              </div>
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaTwitter size={25} />
                </div>
              </div>
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaInstagram size={25} />
                </div>
              </div>
              <div className="flex gap-5 text-black">
                <div className="p-2 bg-white rounded-full">
                  <FaLinkedin size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[15%]">
            <h1 className="text-xl font-semibold my-5">Pages</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="w-[15%]">
            <h1 className="text-xl font-semibold my-5">Support</h1>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="w-[35%]">
            <h1 className="text-xl font-semibold my-5">
              Subscribe to our newsletter
            </h1>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 w-[80%] bg-black border-b border-white py-1"
            />
            <button className="px-2 py-1 text-white">
              <FaArrowCircleRight size={20} className="rounded-full" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Footer;