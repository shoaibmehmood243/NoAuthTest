import PropertyCard from "./PropertyCards";

const Properties = ()=> {
    const data = ['1','1','1','1','1','1']
  return (
      <section className="bg-[#F2F2F2] py-20 px-12">
        <div className="text-center mb-8">
            <span className="text-[#03989E] bg-gray-200 px-8 py-4 rounded-3xl font-bold text-xl">الفرص الإستثمارية</span>
            <p className="text-gray-500 w-2/3 mt-8 mx-auto">من خلال منصة أويس المالية ، يمكن للمستثمرين استعراض الفرص الاستثمارية ، الاستثمار ، وانهاء الاجراءات القانونية عبر المنصة فوراً.
                استثمر الآن ابتداءً من 1000 ريال سعودي فقط . الشركات المدرجة على المنصة هي شركات تمت مراجعة معلوماتها والتأكد من صحتها
            </p>
        </div>
        <div className="w-1/2 ml-auto border-2 border-[#03989E] flex items-center justify-between bg-white py-4 px-4 rounded-xl">
            <div className="w-6 h-6 bg-gray-400"></div>
            <h3 className="text-gray-400">الماجدية</h3>
        </div>
        <div className=" ml-auto w-2/3 mt-6 mb-10 flex items-center justify-end gap-4">
            <button className="border border-[#03989E] py-3 px-4 rounded-xl text-[#03989E] hover:bg-[#03989E] hover:text-white">الفرص المكتملة</button>
            <button className="border border-[#03989E] py-3 px-4 rounded-xl text-[#03989E] hover:bg-[#03989E] hover:text-white">الفرص القادمة</button>
            <button className="border border-[#03989E] py-3 px-4 rounded-xl text-[#03989E] hover:bg-[#03989E] hover:text-white">الفرص النشطة</button>
            <button className="py-3 px-4 rounded-xl bg-[#03989E] text-white">جميع الفرص الاستثمارية</button>
        </div>
        <div className="my-10 grid grid-cols-3 gap-8 px-6">
            {
                data.map((data, index) => (
                    <PropertyCard key={index} />
                ))
            }
        </div>
        <div className="text-center mb-5">
            <button className="rounded-lg bg-[#03989E] text-white px-5 py-3">عرض المزيد </button>
        </div>
      </section>
  )
}

export default Properties;