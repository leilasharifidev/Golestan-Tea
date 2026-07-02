import mainsection1 from "../../assets/img-golestan/chaigermez.png";
const Mainsection1 = () => {
  return (
    <div className="bg-zinc-300 w-full h-[395px] flex flex-row justify-center ">
      <div className="w-[330px] h-[330px]">
        <img src={mainsection1} alt="" />
      </div>

      <div className="w-[350px] h-[350px] flex flex-col justify-center items-end gap-[20px] text-right">
        <p className="w-full text-3xl text-red-600">چای گلستان</p>
        <p className="w-full text-1xl text-zinc-800">سابقه‌ای به قدمت یک عمر</p>
      </div>
    </div>
  );
};

export default Mainsection1;
