import { FaArrowLeft } from "react-icons/fa";
export default function Appheder({ onBack }) {

    return <section className="flex flex-col items-center justify-center bg-primary ">
          <div className="w-full bg-gray-900 text-white  rounded-lg px-3 py-2 mb-3 font-sans p-4 flex items-center shadow-md">
      <button
        onClick={onBack}
        className="flex items-center justify-center w-8 h-8 border border-white rounded-full hover:bg-gray-800 transition"
      >
        <FaArrowLeft size={14} />
      </button>
      <h1 className="ml-3 text-lg font-semibold tracking-wide">
        OTP VERIFICATION
      </h1>
    </div>
    </section>
}
