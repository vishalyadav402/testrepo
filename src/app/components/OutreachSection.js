import Image from "next/image";

const OutreachSection = () => {
  return (
    <section className="bg-[#DCFDF0] py-12 px-6 md:px-16">
      {/* heading title*/}
      <div className="flex justify-between items-center mb-16">
        <div className="text-center w-full">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#00321F]">
          Awareness/Outreach Activities By IRCA’s
        </h2>
        </div>

        <div>
            <button className="flex cursor-pointer justify-between items-center font-[700] text-[20px] gap-[15px] w-[145px] h-[44px] bg-[#00321F] text-white px-[14px] py-[15px] rounded-[10px] border-2 border-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#002A15] transition">
            view all
            <Image src={"/send 1.png"} className="object-contain" height={26} width={26} alt="send icon" />
            </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center gap-6">
        

        <div className="relative cursor-pointer items-center text-white rounded-lg shadow-md group w-[316px] h-[254px]">
        <Image
            src="/Rectangle 13.png"
            alt="Outreach Activity"
            width={316}
            height={254}
            className="object-contain absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Content shows on hover */}
        <div className="absolute inset-0 flex flex-col self-stretch space-y-6 justify-center h-full gap-3 p-4 items-start bg-[#899A5C] rounded-[10px] bg-opacity-80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <p className="text-sm font-semibold flex gap-2">
            <span className="text-[#000]">Activity name:</span> Outreach Activities
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">Activity Date:</span> 02/02/25
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">No. of Participants:</span> 34
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">Remarks:</span> By IRCA’s
          </p>
        </div>

        <div className="p-4 absolute bottom-4 text-white transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-[15px] font-[700] leading-[20px]">
            Outreach Activities By IRCA’s
            </h3>
            <p className="text-[16px] font-[400] leading-[20px]">10 Person</p>
        </div>

  {/* Absolute section*/}
  <div className="flex justify-center w-full absolute left-0 bottom-[-30px]">
    <div className="flex gap-2">
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
    </div>
  </div>
        </div>


        <div className="relative cursor-pointer items-center text-white rounded-lg shadow-md group w-[316px] h-[254px]">
        {/* Image */}
        <Image
            src="/Rectangle 13.png"
            alt="Outreach Activity"
            width={316}
            height={254}
            className="object-contain absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Content shows on hover */}
        <div className="absolute inset-0 flex flex-col self-stretch space-y-6 justify-center h-full gap-3 p-4 items-start bg-[#899A5C] rounded-[10px] bg-opacity-80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
         <p className="text-sm font-semibold flex gap-2">
            <span className="text-[#000]">Activity name:</span> Outreach Activities
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">Activity Date:</span> 02/02/25
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">No. of Participants:</span> 34
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">Remarks:</span> By IRCA’s
          </p>
        </div>

        <div className="p-4 absolute bottom-4 text-white transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-[15px] font-[700] leading-[20px]">
            Outreach Activities By IRCA’s
            </h3>
            <p className="text-[16px] font-[400] leading-[20px]">10 Person</p>
        </div>

  {/* Absolute section at the bottom */}
  <div className="flex justify-center w-full absolute left-0 bottom-[-30px]">
    <div className="flex gap-2">
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
    </div>
  </div>
        </div>

        <div className="relative cursor-pointer items-center text-white rounded-lg shadow-md group w-[316px] h-[254px]">
        {/* Image */}
        <Image
            src="/Rectangle 14.png"
            alt="Outreach Activity"
            width={316}
            height={254}
            className="object-contain absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Content shows on hover */}
        <div className="absolute inset-0 flex flex-col self-stretch space-y-6 justify-center h-full gap-3 p-4 items-start bg-[#899A5C] rounded-[10px] bg-opacity-80 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
         <p className="text-sm font-semibold flex gap-2">
            <span className="text-[#000]">Activity name:</span> Outreach Activities
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">Activity Date:</span> 02/02/25
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">No. of Participants:</span> 34
          </p>
          <p className="text-sm font-semibold flex gap-2">
          <span className="text-[#000]">Remarks:</span> By IRCA’s
          </p>
        </div>

        <div className="p-4 absolute bottom-4 text-white transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-[15px] font-[700] leading-[20px]">
            Outreach Activities By IRCA’s
            </h3>
            <p className="text-[16px] font-[400] leading-[20px]">10 Person</p>
        </div>

  <div className="flex justify-center w-full absolute left-0 bottom-[-30px]">
    <div className="flex gap-2">
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
      <Image src="/Rectangle 104.png" alt="img" className="object-contain shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" width={66.42} height={42.33} />
    </div>
  </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-16">
        <span className="w-10 h-2 bg-[#7B875C] rounded-full"></span>
        <span className="w-10 h-2 bg-[#003B1F] rounded-full"></span>
        <span className="w-10 h-2 bg-[#7B875C] rounded-full"></span>
      </div>
    </section>
  );
};

export default OutreachSection;
