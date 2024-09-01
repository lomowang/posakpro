import { Facebook } from "lucide-react";
import Link from "next/link";

const Social = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="https://www.facebook.com/rainbowandlois">
          <Facebook
            size={30}
            color="#FFFFFF"
            className="bg-blue-600  rounded-xl"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Social;
