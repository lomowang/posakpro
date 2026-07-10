import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Social = ({ containerStyles }) => {
  return (
    <ul className={`flex items-center gap-6 ${containerStyles || ""}`}>
      <li>
        <Link
          href="https://www.facebook.com/posakjodian"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black transition-opacity hover:opacity-50"
        >
          <FaFacebook size={16} aria-hidden="true" />
          Facebook
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/posakjodian/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black transition-opacity hover:opacity-50"
        >
          <FaInstagram size={16} aria-hidden="true" />
          Instagram
        </Link>
      </li>
    </ul>
  );
};

export default Social;
