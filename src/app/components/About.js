import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-[#0F3B21] relative text-white px-6 pt-10 md:px-20 md:pt-16 flex flex-col md:flex-row items-center gap-6">
       
    <div className="flex gap-1 absolute top-6 left-6">
    <span className="h-[48px] w-[53px] bg-[#899A5C]"></span>
    <span className="self-end h-[16px] w-[18px] bg-[#BCB98A]"></span>
    </div>

      {/* left image */}
      <div className="flex-1">
        <Image
          src="/Clip path group.png"
          alt="Illustration image"
          width={573}
          height={894}
          className="object-contain"
        />
      </div>

      {/* right content*/}
      <div className="flex-1 text-center">
        <h2 className="text-2xl md:text-[40px] font-bold mb-4">About Us</h2>
        <p className="text-sm md:text-[24px] leading-relaxed justify-center">
          The Ministry of Social Justice and Empowerment (MSJE) has taken an
          initiative to establish an Integrated Drug Addiction Monitoring System
          (IDAMS) so that data on help seekers at centres funded by the Ministry
          is collected in a systematic way. As a centre funded by the ministry,
          your participation in this exercise is extremely valuable. You are
          required to submit a form online for each new patient seeking
          treatment/rehabilitation/counselling (for alcohol or any other drug)
          at your centre.
        </p>

        {/* more btn */}
        <button className="my-6 cursor-pointer w-[183px] h-[49px] text-[28px] font-[700] bg-[#C2B47F] text-[#141517] rounded-[25px] shadow-md hover:bg-[#A89C6E] transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
