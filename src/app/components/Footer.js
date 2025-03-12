import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#D9E8DB] text-[#00321F]">
        <div className="grid grid-cols-3 gap-6 px-4" style={{ gridTemplateColumns: '40% 30% 30%' }}>
          {/* left */}
          <div className="flex flex-col py-8">
            <div className="flex items-start ml-4">
              <Image src="/government-logo 1.png" alt="Govt. Logo" className="object-contain" width={51} height={86} />
              
              <div className="ml-3 self-center">
                <p className="font-[700] text-[15px] leading-none">Integrated Drug Addiction Monitoring System (IDAMS)</p>
                <p className="font-[400] text-[15px] leading-none mt-4">Department of Social Justice & Empowerment, Government of India.</p>
              </div>
            </div>
           {/* Social Icons */}
           <div className="flex justify-start ml-18 mt-10 cursor-pointer">
                <Image src="/1 429.png" alt="img" className="object-contain" width={200} height={90} />
              </div>
          </div>

          {/* center */}
          <div className="text-center py-8 text-[18px] font-[600] flex flex-col gap-2 h-full justify-center items-center border-x-1 border-white">
            <a href="#" className="hover:text-green-700">Contact Us</a>
            <a href="#" className="hover:text-green-700">About Us</a>
            <a href="#" className="hover:text-green-700">Gallery</a>
            <a href="#" className="hover:text-green-700">Terms & Conditions</a>
            <a href="#" className="hover:text-green-700">Copyright Policy</a>
          </div>

         {/* right */}
          <div className="py-8 flex flex-col items-start max-w-[90%]">
            <Image 
              src="/NIC-LOGO-IDENTITY-VARIANTS_sans-01 1.png" 
              alt="NIC Logo" 
              className="object-contain w-full max-w-[250px]" 
              width={250} 
              height={152} 
            />
            <p className="mt-2 text-center text-[18px] leading-[24px] font-[400] max-w-[90%]">
              This site is designed, developed, hosted, and maintained by National Informatics Centre, 
              Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment, Government of India.
            </p>
          </div>
        </div>

        {/* bottom section */}
        <div className="bg-[#00321F] text-white py-2 h-[50px] flex justify-between items-center px-4">
          <p className="text-[20px]">No. of visitors: 3,935</p>
          <p className="text-[24px]">Last updated on: 27 January 2025</p>
        </div>
    </footer>
  );
}
