import { company, heroImage } from "../../../assets/images";

const PropertyCard = ({index}) => {
  return (
    <div key={index} className="bg-white rounded-3xl">
      <div className="">
        <img src={heroImage} alt="image" />
      </div>
      <div className="flex justify-between items-end mt-[-60px] px-4 mb-4">
        <div className="bg-gray-300 w-6 h-6"></div>
        <div>
          <img src={company} />
        </div>
        <span className="rounded-xl bg-[#03989E] text-white px-3 py-1">نشط</span>
      </div>
      <div className="mb-4 px-4">
        <h5 className="text-end text-gray-400 font-semibold">صندوق الماجدية</h5>
        <p className="text-end text-gray-400 text-sm tracking-normal font-normal">نعمل في رؤية ريزدنس على الإبداع والابتكار في تصاميمنا
          للوحدات السكنية ، فبين الجمال واستثمار المساحات تكمن
          تصاميم الماجدية
        </p>
      </div>
      <hr className="mb-4" />
      <div className="px-4">
        <div className="flex justify-between items-center">
          <span className="py-1 px-4 rounded-xl bg-[#03989E] text-white"> ريال50,500,000</span>
          <span className=" font-bold text-gray-400">إجمالي قيمة الطرح</span>
        </div>
        <div class="relative w-full h-8 bg-gray-300 my-4 rounded-3xl overflow-hidden">
          <div class="absolute top-0 left-0 h-full bg-[#03989E] w-3/4 rounded-3xl">
            <p class="text-white px-2 m-0 mt-1 text-center">75%</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pr-4 pl-3 mb-5">
          <span className="text-[#03989E]">  25,200,000 ريال </span>
          <span className="text-gray-500 text-end font-semibold text-sm">  المبلغ الذي تم جمعه</span>
          <span className="text-[#03989E]"> 17.3%</span>
          <span className="text-gray-500 text-end font-semibold text-sm"> العائد المتوقع</span>
          <span className="text-[#03989E]">   1,000 ريال</span>
          <span className="text-gray-500 text-end font-semibold text-sm">  سعر الوحدة</span>
          <span className="text-[#03989E]">   22 شهر</span>
          <span className="text-gray-500 text-end font-semibold text-sm">  مدة الصندوق</span>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard;