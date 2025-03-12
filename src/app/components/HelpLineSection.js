import Image from "next/image";

const HelplineSection = () => {
  return (
    <section className="bg-[#F0EFC8] flex justify-between items-center px-6 py-2 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <Image src="/government-logo 1.png" className="object-contain" alt="Government Logo" width={65} height={110}  />
        <div>
          <h2 className="text-[20px] font-[700] text-[#0F4B32] mb-1">
            Integrated Drug Addiction Monitoring System (IDAMS)
          </h2>
          <p className="text-[15px] font-[400] leading-none text-gray-800">
            Department of Social Justice & Empowerment. <br />
            Government of India.
          </p>
        </div>
      </div>

      {/* helpline vector img */}
      <div className="flex items-center space-x-2">
          <Image src="/helpline.png" className="object-contain cursor-pointer" alt="helpline Icon" width={586.11} height={116}/>
      </div>
    </section>
  );
};

export default HelplineSection;
