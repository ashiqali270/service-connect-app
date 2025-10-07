import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

export default function Footer() {

    return <section className="flex flex-col items-center justify-center min-h-screen font-sans p-4 bg-primary py-3 px-4 shadow-md ">
        <div className=" rounded-lg p-4 w-full max-w-sm text-center">
        <p className="text-gray-700 mb-3">Or Continue With</p>
        <div className="flex justify-center space-x-6 mb-4">
          <button className="bg-white p-3 rounded-full shadow hover:scale-105">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="bg-white p-3 rounded-full shadow hover:scale-105">
            <BsApple className="text-2xl" />
          </button>
        </div>

        <p className="text-gray-700 text-sm">
          Already have an Account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            SIGN IN
          </span>
        </p>
      </div>
    

    </section>
}