import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-12 py-8 bg-background/50 backdrop-blur-sm border-t-2 flex items-center justify-between">
      <div className="flex flex-row items-center justify-between w-full">
        <div></div>
        <div className="flex items-center gap-x-2">
          <FaRegCopyright />{" "}
          <span>
            FOFANA BASSIROU - {new Date().getFullYear()} - Tous droits réservés.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
