import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#899A5C] text-[#00321F] flex justify-between items-center px-6 h-[76.6px]">
      {/* nav links */}
      <ul className="flex space-x-6 text-[20px] font-[600]">
        <li className="text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Contact Us</li>
        <li className="hover:text-white cursor-pointer">User Guide</li>
      </ul>

      <div className="flex space-x-3">
        {/* login */}
        <button className="flex items-center">
          <Image src="/login_btn.png" className="object-contain cursor-pointer" alt="Login Icon" width={172.06} height={35.18} />
        </button>

        {/* register */}
        <button className="flex items-center">
          <Image src="/register_btn.png" className="rounded-md shadow object-contain cursor-pointer" alt="Register Icon" width={164.24} height={30.84} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
