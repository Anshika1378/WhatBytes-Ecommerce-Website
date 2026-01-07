import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">

        {/* Column 1 */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl">Filter</h1>
          <h6 className="flex justify-center md:justify-start items-center gap-1 mt-6 text-sm">
            <AiOutlineCopyrightCircle />
            2024 American
          </h6>
        </div>

        {/* Column 2 */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl">About Us</h1>
          <p className="mt-4 cursor-pointer hover:underline">About Us</p>
          <p className="mt-2 cursor-pointer hover:underline">Contact</p>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl">Follow Us</h1>
          <div className="flex gap-4 mt-4 justify-center md:justify-start items-center">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png"
              alt="Facebook"
              className="h-8 w-auto"
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/065/386/770/small/twitter-circle-logo-icon-twitter-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png"
              alt="Twitter"
              className="h-10 w-auto"
            />
            <AiFillInstagram size={28} className="text-pink-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
