import logo from "../../assets/img-golestan/logo-fr.png";
const Header = () => {
  return (
    <div>
      <div className="bg-zinc-800 h-[108px] flex flex-row-reverse px-50">
        <div className="flex mr-auto ml-auto w-1/5 h-auto p-10 flex-wrap content-start ">
          <img src={logo} alt="" className="" />
        </div>

        <div className="w-4/5 flex content-center items-center justify-center p-10 flex-wrap flex-col [direction:rtl] ">
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            صفحه اصلی
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            شرکت گلستان
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            محصولات
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            وبلاگ
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            قرعه کشی
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            استخدام
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            تماس با ما
          </a>
          <span className="w-[1px] text-zinc-400">|</span>
          <a
            className="text-[15px] no-underline py-[13px] px-[20px] text-zinc-400"
            href="#"
          >
            EN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
