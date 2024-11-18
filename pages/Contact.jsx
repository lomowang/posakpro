import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-8 max-w-screen-xl m-auto">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="md:flex md:justify-around md:items-start text-justify">
          <div className="flex-col flex my-auto mx-auto ">
            <h2 className="text-xl font-medium leading-7">Posak Jodian</h2>
            <h2 className="text-sm  leading-7 py-4 text-gray-400">
              posak1987@gmail.com
            </h2>

            <div className="flex items-center space-x-4 mt-4 ">
              <a
                href="https://www.facebook.com/posakjodian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/posakjodian/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <Image
              src="/pro/Posak.png"
              width={380}
              height={120}
              alt="Posak Jodian"
              layout="intrinsic" // 使用 intrinsic layout 確保圖片不變形
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
