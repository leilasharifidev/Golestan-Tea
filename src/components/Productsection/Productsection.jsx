/*import erlgary from "../../assets/img-golestan/chaierlgerl2.png";
import herbalicon from "../../assets/img-golestan/herbal-icon.png";
import sadgram from "../../assets/img-golestan/100-icon.png";
import divistgram from "../../assets/img-golestan/225gr-icon.png";
import poonsadgram from "../../assets/img-golestan/500gr-icon.png";
const Productsection = () => {
  return (
    <div className="w-[700px] h-[356px] flex flex-row mx-auto">
      <div
        dir="rtl"
        className="w-[466px]  h-full flex flex-col p-10 content-start "
      >
        <div className=" flex flex-row gap-2">
          <img src={herbalicon} alt="" className="justify-center " />
          <span className="text-2xl text-red-600 justify-center text-center items-center leading-[3]">
            چای ارل گری
          </span>
        </div>

        <div className=" text-zinc-400">
          ______________________________________________________
        </div>

        <div className="h-[50px] flex flex-row gap-2">
          <span className="text-2xl text-zinc-600 justify-center text-center items-center ml-[140px] leading-10">
            وزن
          </span>
          <img src={sadgram} alt="" />
          <img src={divistgram} alt="" />
          <img src={poonsadgram} alt="" />
        </div>

        <div className=" text-zinc-400">
          ______________________________________________________
        </div>

        <div className=" mt-[20px]">
          <p className="text-base text-zinc-500">
            چای ارل گری گلستان، ترکیبی است از انواع چای باروتی سیلان که با عصاره
            برگاموت معطر شده است. زمان دم کشیدن این چای 7 تا 8 دقیقه می باشد.
          </p>
        </div>

        <div>
          <button className="border-1 w-[130px] h-[45px] rounded-xl bg-red-600 text-white mt-[40px]">
            خرید محصول
          </button>
        </div>
      </div>
      <div className="w-[233px] h-full p-10 flex content-start">
        <img src={erlgary} alt="" />
      </div>
    </div>
  );
};
export default Productsection;
*/

import herbalicon from "../../assets/img-golestan/herbal-icon.png";

const ProductSection = ({
  title,
  description,
  productImage,
  weights = [],
  buttonText = "خرید محصول",
}) => {
  return (
    <div className="w-[700px] h-[356px] flex flex-row mx-auto my-[100px]">
      {/* اطلاعات محصول */}
      <div dir="rtl" className="w-[466px] h-full flex flex-col p-10 ">
        {/* عنوان */}
        <div className="flex gap-2 items-center">
          <img src={herbalicon} alt="" />

          <span className="text-2xl text-red-600 text-2xl text-red-600 justify-center text-center items-center leading-[3]">
            {title}
          </span>
        </div>

        <div className="text-zinc-400">
          ______________________________________________________
        </div>

        {/* وزن */}
        <div className="flex items-center gap-3 h-[60px]">
          <span className="text-2xl text-zinc-600 text-2xl text-zinc-600 justify-center text-center items-center ml-[140px] leading-10">
            وزن
          </span>
          <div
            className="flex flex-row-reverse justify-items-end  
          gap-2 "
          >
            {weights.map((item, index) => (
              <img className="" key={index} src={item} alt="" />
            ))}
          </div>
        </div>

        <div className="text-zinc-400">
          ______________________________________________________
        </div>

        {/* توضیحات */}
        <div className="mt-5">
          <p className="text-zinc-500">{description}</p>
        </div>

        {/* دکمه */}
        <div className="mt-10">
          <button className="w-[130px] h-[45px] rounded-xl bg-red-600 text-white ">
            {buttonText}
          </button>
        </div>
      </div>

      {/* عکس */}
      <div className="w-[233px] h-full mt-[40px] flex items-start justify-center">
        <img src={productImage} alt={title} />
      </div>
    </div>
  );
};

export default ProductSection;
