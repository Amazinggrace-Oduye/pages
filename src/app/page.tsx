import Image from "next/image";
import { Inter } from "next/font/google";
import profilePic from "avarter.jpeg";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2 bg-blue-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* caousel and login section */}
        <div className=" bg-white w-screen h-screen flex">
          <div className="w-full h-full bg-blue-400">
            <div className="text-left font-bold px-3 mt-4 text-white text-xl">
              Cet<span className="text-blue-500">on</span>
            </div>
            <div className=" text-white px-10 mt-80 text-2xl">
              <h2 className="font-bold">Hello, Friends!</h2>
              <h2 className="font-bold">
                I&apos;m using Centon to manage my business
              </h2>
              <h2 className="font-bold">
                I can&apos;t imagine working without Cet
                <span className="text-blue-500">on</span>
              </h2>
            </div>
            <div className="relative">
              <Image
                className="rounded-full relative mx-auto my-6"
                alt="user image"
                src={profilePic}
                width={50}
                height={50}
              />
              <h6 className="font-bold">Kelly Williams</h6>
              <h6 className=" text-gray-200 text-base font-bold">
                CEO, Business 1
              </h6>
              <p>⭐⭐⭐⭐⭐✨</p>
            </div>
          </div>
          <div className="w-full h-full text-black">
            <div className="py-5 mt-60 justify-center text-left ml-40 ">
              <h1 className="font-bold text-2xl ">Welcome back</h1>
              <p className="font-light  text-gray-500 ">
                Welcome back! Please enter your detail.
              </p>
            </div>
            <div className=" flex flex-col ml-40">
              <p className="text-left font-light">Email</p>
              <div className="w-1/2 p-1.5 bg-gray-50 border-2 rounded-md flex">
                <FaRegEnvelope className="mr-2 text-gray-500" />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="[a-z0-9]{1,15}"
                  title="Should be a valid email."
                  placeholder="Enter your email"
                  className="outline-none bg-white text-sm flex-auto"
                />
              </div>
              <p className="text-left mt-3 font-light">Password</p>
              <div className="w-1/2 p-1.5 bg-white border-2 rounded-md flex ">
                <MdLockOutline className="mr-2 text-gray-500" />
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  title="Password should be digits (0 to 9) special character and alphabets (a to z)."
                  placeholder="Enterl your password"
                  className="outline-none bg-white text-sm flex-auto"
                />
              </div>
              <div className="w-1/2 p-1.5 mt-5 bg-blue-400 border-2  rounded-md flex ">
                <button type="submit" className="mx-auto text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
