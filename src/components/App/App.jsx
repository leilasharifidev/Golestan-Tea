import Header from "../Header/Header";
import Mainsection1 from "../Mainsection1/Mainsection1";
import Mainsection2 from "../Mainsection2/Mainsection2";
import Productsection from "../Productsection/Productsection";
import "./App.css";
import ProductSection from "../Productsection/Productsection.jsx";

import erlgray from "../../assets/img-golestan/chaierlgerl2.png";
import greenTea from "../../assets/img-golestan/chaierlgerl2.png";
import sadgram from "../../assets/img-golestan/100-icon.png";
import divistgram from "../../assets/img-golestan/225gr-icon.png";
import poonsadgram from "../../assets/img-golestan/500gr-icon.png";
import momtaz from "../../assets/img-golestan/chaigermez.png";
import seilan from "../../assets/img-golestan/chaiseilantalaee4.png";
import narenji from "../../assets/img-golestan/نارنجی.png";
import banafsh from "../../assets/img-golestan/product-tea-Darjeeling6.jpg";
import meshki from "../../assets/img-golestan/product-teabag-7.jpg";
import germez from "../../assets/img-golestan/product-teabag-8.jpg";
import germezsefid from "../../assets/img-golestan/product-teabag-9.jpg";
import meshkisefid from "../../assets/img-golestan/product-teabag-10.jpg";
import sefidabi from "../../assets/img-golestan/product-teabag-11.jpg";
import talae from "../../assets/img-golestan/product-teabag-12.jpg";
import noghre from "../../assets/img-golestan/product-teabag-13.jpg";
import sabz from "../../assets/img-golestan/product-greentea-14.jpg";
import zard from "../../assets/img-golestan/product-greentea-15.jpg";
import sabzabi from "../../assets/img-golestan/product-greentea-16.jpg";
import sabzsefid from "../../assets/img-golestan/product-greentea-17.jpg";
import barg from "../../assets/img-golestan/product-greentea-18.jpg";
import darchin from "../../assets/img-golestan/product-greentea-19.jpg";
import gol from "../../assets/img-golestan/product-greentea-20.jpg";
import limo from "../../assets/img-golestan/product-greentea-21.jpg";
import nana from "../../assets/img-golestan/product-greentea-22.jpg";
import sabzroshan from "../../assets/img-golestan/product-greentea-23.jpg";
import chaeiblack from "../../assets/img-golestan/product-blackline-24.jpg";
import chaeigol from "../../assets/img-golestan/product-blackline-25.jpg";
import chaeiholo from "../../assets/img-golestan/product-blackline-26.jpg";
import chaeidarchin from "../../assets/img-golestan/product-blackline-27.jpg";
import chaeilimo from "../../assets/img-golestan/product-blackline-28.jpg";
import chaeibargebo from "../../assets/img-golestan/product-blackline-29.jpg";
import chaeigolbanafsh from "../../assets/img-golestan/product-blackline-30.jpg";
import chaeizanjefil from "../../assets/img-golestan/11111tea31.jpg";
import chaeisiyah from "../../assets/img-golestan/product-blackline-32.jpg";
import Footer from "../Footer/Footer.jsx";

Footer;

const App = () => {
  return (
    <div>
      <Header />
      <Mainsection1 />
      <Mainsection2 />

      <ProductSection
        title="چای ارل گری"
        description="چای ارل گری گلستان، ترکیبی است از انواع چای باروتی سیلان که با عصاره برگاموت معطر شده است. زمان دم کشیدن این چای 7 تا 8 دقیقه می باشد."
        productImage={erlgray}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای ممتاز هندوستان"
        description="چای ممتاز هندوستان گلستان دستچینی است زرین از مرغوبترین برگ و غنچه گیاه چای که در کناره های رودخانه برهماپوترا در اراضی آسام و دارجلینگ هند به عمل آمده است. این چای دارای عطر و طعم طبیعی چای سنتی هندوستان می باشد. زمان دم کشیدن این چای 8 تا 12دقیقه می باشد."
        productImage={momtaz}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای سیلان طلایی"
        description="گلستان با دستچینی از جوانترین برگهای چای رشد یافته در کوهپایه ها و دشت های سریلانکا یکی از بهترین نوشیدنی های چای را با عنوان چای سیلان طلایی به بازار عرضه کرده است. زمان دم کشیدن این چای 7 تا 8 دقیقه می باشد."
        productImage={seilan}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای صبحانه گلستان"
        description="چای صبحانه گلستان، دستچینی از بهترین چای کله مورچه ای، باغات هندوستان می باشد. با عطر و رنگ کاملاً طبیعی و به دلیل سرعت زیاد دم کشیدن مناسب جهت استفاده در صبح می باشد. چای صبحانه با رنگ دهی بالا مقرون بصرفه است. زمان دم کشیدن این چای 3 تا 4 دقیقه می باشد."
        productImage={narenji}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای دارجلينگ (توقف تولید)"
        description="چای دارجلينگ دستچينی از بهترين و مرغوب ترين برگ های چای منطقه دارجلينگ در شمال هندوستان و كوهپايه های هيماليا مي باشد. اين چای يكی از ارزشمندترين چای های جهان و دارای عطر و طعمی منحصربه فرد است."
        productImage={banafsh}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ ارل گری"
        description="چای کیسه ای ممتاز عطری گلستان از ترکیب مرغوبترین چای خارجی CTC هندوستان به همراه عصاره برگاموت به صورت دولایه تولید شده است. عصاره گیاه برگاموت نوشیدنی با عطر شعف آور و طعم و رنگ عالی برای مصرف در تمام اوقات فراهم آورده است. برگاموت نوعی از مرکبات با طعم و خواص مشابه ترنج است."
        productImage={meshki}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ ممتاز هندوستان"
        description="چای کیسه ای ممتاز هندوستان محصول بهترین و مرغوب ترین برگ های چای می باشد. که با عشق توسط متخصصین شرکت گلستان با یکدیگر ترکیب شده و نوشیدنی منحصر به فردی را با طعم دلپذیر و رنگ مطلوب برای لذت بردن شما فراهم کرده است."
        productImage={germez}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ خارجه گلستان"
        description="چای کیسه ای درجه یک گلستان محصول بهترین و مرغوب ترین برگ های چای از مزارع هندوستان می باشد که توسط متخصصین شرکت گلستان با یکدیگر ترکیب شده، و به صورت تی بگ تک لایه عرضه می شود."
        productImage={germezsefid}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ خارجه معطر"
        description="چای کیسه ای درجه یک گلستان محصول بهترین و مرغوب ترین برگ های چای از مزارع هندوستان می باشد که توسط متخصصین شرکت گلستان با یکدیگر ترکیب شده، و به صورت تی بگ تک لایه عرضه می شود."
        productImage={meshkisefid}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی‌بگ خارجه انولوپ‌‌دار"
        description="تی‌بگ خارجه انولوپ‌‌دار گلستان در بسته بندی 1000عددی برای مصارف صنعتی، رستوران ها، هتل ها و… عرضه شده است. پاکت محافظ (انولوپ) برای هر کیسه چای باعث ماندگاری بهتر عطر و طعم چای می شود."
        productImage={sefidabi}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ تشریفات ممتاز هندوستان"
        description="چای کیسه ای تشریفات ممتاز گلستان (انولوپ دار) محصول بهترین و مرغوب ترین برگ های چای از مزارع هندوستان می باشد. که توسط متخصصین شرکت گلستان با یکدیگر ترکیب شده و نوشیدنی منحصر به فردی را برای لذت بردن شما فراهم کرده است."
        productImage={talae}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ تشریفات ارل گری (معطر)"
        description="چای کیسه ای تشریفات ارل گری (معطر، انولوپ دار) ترکیبی از برگ های لطیف و مرغوب از بهترین مزارع چای به همراه عصاره برگاموت است. که با دقت توسط متخصصین با تجربه گلستان انتخاب شده و نوشیدنی با عطر شعف آور و طعم و رنگ عالی برای مصرف در تمام اوقات فراهم آورده است. برگاموت نوعی از مرکبات با طعم و خواص مشابه ترنج است."
        productImage={noghre}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای سبز خالص گلستان"
        description="چای سبز گلستان سرشار از ترکیبات آنتی اکسیدان (ترکیبات ضد سرطان) و ویتامینهای K, C, B1, B2, A می باشد و دارای خواص درمانی کاهش ابتلا به سرطان، شادابی پوست و مو، تراکم استخوان، سلامتی دهان و دندان و کاهش وزن است."
        productImage={sabz}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای سبز لیمویی گلستان"
        description="چای سبز به دلیل ویژگی های منحصر به فردش از شهرت فراوانی برخوردار است. چای سبز لیمو گلستان لیمو یک نوشیدنی سالم و طبیعی را برای شما به ارمغان می آورد. لذت نوشیدن این چای سالم و طبیعی را تجربه کنید."
        productImage={zard}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای سبز نعناع گلستان"
        description="طعم طبیعی چای سبز و عطر ملایم نعناع، یک انتخاب ایده ال جهت مصرف بعد از وعده های غذایی می باشد. ترکیبات آنتی اکسیدانی موجود در چای سبز با افزایش متابولیسم بدن تاثیر بسزایی در کاهش وزن، کنترل فشار خون و چربی خون دارد."
        productImage={sabzabi}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای سبز یاس گلستان"
        description="ترکیب گل های یاس و چای سبز رایحه ای خوشایند و به یادماندنی یه ارمغان می آورد. این محصول علاوه بر طعم خوب کلسترول خون را به میزان قابل توجهی کاهش می‌ دهد و به دلیل فلوراید موجود در چای سبز می تواند نقش مهمی در محافظت دندانها ایفا می کند."
        productImage={sabzsefid}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ چای سبز"
        description="چای سبز کیسه ای گلستان به دلیل ویژگی های منحصر به فردش از شهرت فراوانی برخوردار است. ترکیبات آنتی اکسیدانی موجود در چای سبز موجب کاهش ریسک ابتلا به سرطان می گردد و با افزایش متابولیسم بدن تاثیر بسزایی در کاهش وزن، کنترل فشار خون و چربی خون دارد."
        productImage={barg}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ چای سبز دارچین"
        description="با نوشیدن یک فنجان چای سبز کیسه ای دارچین گلستان، علاوه بر خواص مفید چای سبز از املاح معدنی موجود در دارچین از جمله کلسیم، آهن، پتاسیم و … بهره خواهید برد. این نوشیدنی برای بیماران دیابتی نیز مفید می باشد."
        productImage={darchin}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ چای سبز یاس"
        description="ترکیب گل های یاس و چای سبز رایحه ای خوشایند و به یادماندنی یه ارمغان می آورد. چای سبز کیسه ای یاس گلستان علاوه بر طعم خوب کلسترول خون را به میزان قابل توجهی کاهش می‌ دهد و به دلیل فلوراید موجود در چای سبز می تواند نقش مهمی در محافظت دندانها ایفا می کند."
        productImage={gol}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ چای سبز لیمویی"
        description="چای سبز کیسه ای لیمو گلستان به دلیل خواص درمانی متفاوت اش در کاهش ابتلا به سرطان، شادابی پوست و مو، تراکم استخوان و سلامتی دهان و دندان یک نوشیدنی سالم و طبیعی را برای شما به ارمغان می آورد. لذت نوشیدن این چای سالم و طبیعی را تجربه کنید."
        productImage={limo}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="تی بگ چای سبز نعناع"
        description="طعم طبیعی چای سبز و عطر ملایم نعناع، یک انتخاب ایده ال جهت مصرف بعد از وعده های غذایی می باشد. ترکیبات آنتی اکسیدانی موجود در چای سبز کیسه ای نعناع گلستان با افزایش متابولیسم بدن تاثیر بسزایی در کاهش وزن، کنترل فشار خون و چربی خون دارد"
        productImage={nana}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="جعبه ترکیبی چای سبز گلستان"
        description="بسته ترکیبی 60عددی چای سبز گلستان مناسب انواع سلیقه‌ها و حاوی 60 عدد چای کیسه‌ای با طعم‌های چای سبز دارچین (20 عدد)، چای سبز خالص (20 عدد)، چای سبز لیمویی (10عدد) و چای سبز نعناع (10عدد) است."
        productImage={sabzroshan}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای رویال بلک لاین"
        description="چای تی بگ رویال بلک لاین نوشیدنی دلچسب و محبوبی برای تمام اوقات روز است. چای کیسه ای رویال از مرغوب ترین چای CTC صددرصد خارجه هندوستان و کنیا تهیه شده است و در بسته بندی ویژه عرضه می شود. برای ماندگاری بهتر عطر و طعم چای، تی بگ بلک لاین داری پاکت محافظ (انولوپ) برای هر کسه چای می باشد."
        productImage={chaeiblack}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین رویال ارل گری"
        description="تی بگ بلک لاین رویال ارل گری با طعم برگاموت ساخته شده از مرغوب ترین چای CTC هندوستان و کنیا تهیه شده است و در بسته بندی ویژه عرضه می شود. چای کیسه‌ای رویال ارل گری گلستان علاوه بر مطلوبیت طعم و رفع خواب‌آلودگی و سردرد مفید است. برای ماندگاری بهتر عطر و طعم چای، تی بگ بلک لاین داری پاکت محافظ (انولوپ) برای هر کیسه چای می باشد."
        productImage={chaeigol}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین با طعم هلو"
        description="تی بگ بلک لاین گلستان با طعم هلو از ترکیب 100% چای سیاه سی تی سی هندوستان و کنیا با طعم هلو ساخته شده و نوشیدنی خوش‌عطرو دلچسب برای تمام اوقات روز است. برای ماندگاری بهتر عطر و طعم چای، تی بگ بلک لاین داری پاکت محافظ (انولوپ) برای هر کیسه چای می باشد. این چای کیسه‌ای دلپذیر را 3 تا 5 دقیقه در آب‌جوش قرار دهید تا دم بکشد."
        productImage={chaeiholo}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین دارچین"
        description="تی بگ بلک لاین دارچین گلستان در بسته بندی ویژه به بازار عرضه شده است. دارچین اثر آرام کننده و شاد کننده دارد و باعث بهبود گردش خون می شود. دارچین علاوه بر همه این خواص، طعم بسیار خوبی نیز دارد. برای ماندگاری بهتر عطر و طعم چای، تی بگ بلک لاین دارچین گلستان داری پاکت محافظ (انولوپ) برای هر کیسه چای می باشد."
        productImage={chaeidarchin}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین لیمویی"
        description="تی بگ بلک لاین لیمویی محصولی خوش عطر و فرح بخش است که از مرغوب ترین چای CTC صددرصد خارجه هندوستان و کنیا تهیه شده است و در بسته بندی ویژه عرضه می شود. برای ماندگاری بهتر عطر و طعم چای،تی بگ بلک لاین داری پاکت محافظ (انولوپ) برای هر کیسه چای می باشد."
        productImage={chaeilimo}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین با عطر هل"
        description="تی بگ بلک لاین گلستان با طعم دهنده ی طبیعی هل از مرغوب ترین چای CTC صددرصد خارجه هندوستان و کنیا تهیه شده است و در بسته بندی ویژه عرضه می شود. برای ماندگاری بهتر عطر و طعم چای، تی بگ بلک لاین داری پاکت محافظ (انولوپ) برای هر کیسه چای می باشد."
        productImage={chaeibargebo}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین زعفرانی"
        description="تی بگ بلک لاین زعفرانی گلستان در بسته‌بندی ویژه به بازار عرضه شده و حاوی مرغوب‌ترین انواع زعفران است. زعفران شادی‌آور بوده و تأثیر به‌سزایی در تقویت سیستم عصبی دارد. برای ماندگاری بهتر عطر و طعم چای، تی بگ بلک لاین زعفرانی گلستان داری پاکت محافظ (انولوپ) برای هر کیسه چای می باشد."
        productImage={chaeigolbanafsh}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="چای بلک لاین زنجبیل"
        description="تی بگ بلک لاین زنجبیل محصولی خوش عطر و طعم است که از مرغوب ترین چای CTC صددرصد خارجه هندوستان و کنیا و زنجبیل تهیه شده است. زنجبیل گیاهی سرشار از آنتی اکسیدان و دارای خواص ضد التهابی، بهبود دهنده سیستم ایمنی، تسکین دهنده دستگاه گوارش است و فواید فراوانی برای سلامتی دارد."
        productImage={chaeizanjefil}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <ProductSection
        title="جعبه ترکیبی تی بگ بلک لاین"
        description="چای کیسه‌ای ترکیبی گلستان مدل Black Line بسته60 عددی در شش طعم متفاوت ارل گری، لیمو، رویال، دارچین، هل و هلو تهیه شده است."
        productImage={meshki}
        weights={[sadgram, divistgram, poonsadgram]}
      />

      <Footer />
    </div>
  );
};

export default App;
