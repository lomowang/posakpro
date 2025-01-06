import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-8 max-w-screen-xl mx-auto">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="md:flex md:justify-between md:items-center text-justify">
          {/* 聯絡信息 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left my-auto">
            <h2 className="text-xl font-medium leading-7">Posak Jodian</h2>
            <p className="text-sm leading-7 py-4 text-gray-400">
              posak1987@gmail.com
            </p>
            <div className="flex items-center space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/posakjodian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook size={24} />
              </a>
              {/* Instagram */}
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

          {/* 圖片區域 */}
          <div className="flex justify-center mt-8 md:mt-0">
            <Image
              src="/pro/Posak.png"
              width={380}
              height={120}
              alt="Posak Jodian"
              className="rounded-lg"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
