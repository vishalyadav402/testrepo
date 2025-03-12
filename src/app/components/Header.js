import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#003B1F] text-white flex items-center justify-between border-b border-gray-300">
      <div className="flex items-center ps-6 h-[40px]">
    <span className="text-sm font-semibold flex items-center h-full gap-3">
      <span className="text-white">भारत सरकार</span>
      <span className="border-l border-gray-400 ps-2 h-full flex items-center">Government of India</span>
    </span>
  </div>

      <div className="flex items-center space-x-2 h-[80px]">
        <div className="flex items-center h-full">
            <a
                href="#main-content"
                className="text-[24px] font-[500] text-gray-200 hover:text-white cursor-pointer"
            >
                Skip To Main Content
            </a>
        </div>

        <div className="flex items-center h-full border-l border-gray-400 px-2">
            <Image className="cursor-pointer" src={'/gravity-ui_magnifier-minus.png'} alt="alt name" height={30} width={30} />
        </div>

        <div className="flex items-center h-full border-l border-gray-400 px-2">
            <Image className="cursor-pointer" src={'/uil_language.png'} alt="alt name" height={30} width={30} />
        </div>

        <div className="flex items-center h-full border-l border-gray-400 px-0 space-x-0">
            <Image className="cursor-pointer" src={'/simple-line-icons_social-facebook.png'} alt="alt name" height={30} width={20} />
            <Image className="cursor-pointer" src={'/typcn_social-instagram.png'} alt="alt name" height={30} width={20} />
        </div>

        <div className="flex items-center h-full border-l border-gray-400 px-2">
            <Image className="cursor-pointer" src={'/uil_letter-hindi-a.png'} alt="alt name" height={30} width={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
