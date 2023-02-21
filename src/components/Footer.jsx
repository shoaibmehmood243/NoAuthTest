import { logo } from "../assets/images";

const Footer = ()=> {
  return (
      <div className="bg-[#03989E] py-8 px-12 border-b-8 border-gray-600">
        <div className="grid grid-cols-5 gap-4 text-white">
            <div className="text-start col-span-2 pl-6">
                <img src={logo} className="mr-auto" />
                <h3 className="font-bold mt-4"> تعطيك فرصة</h3>
            </div>
            <div className="text-end">
                <h6 className="text-lg font-semibold">المستثمرين</h6>
                <ul className="mt-4 text-md">
                    <li><a href="#">البدء</a></li>
                </ul>
            </div>
            <div className="text-end">
                <h6 className="text-lg font-semibold">اصدار الصكوك</h6>
                <ul className="mt-4 text-md">
                    <li className="py-1"><a href="#">رسوم اصدار الصكوك</a></li>
                    <li className="py-1"><a href="#">رسوم الوكالة</a></li>
                    <li className="py-1"><a href="#">إرشادات اصدار ادوات الدين</a></li>
                </ul>
            </div>
            <div className="text-end">
                <h6 className="text-lg font-semibold">آويس المالية تعطيك فرصة</h6>
                <ul className="mt-4 text-md">
                    <li className="py-1"><a href="#">حول آويس المالية</a></li>
                    <li className="py-1"><a href="#">الوظائف</a></li>
                    <li className="py-1"><a href="#">شركاؤنا</a></li>
                    <li className="py-1"><a href="#">صحافة</a></li>
                    <li className="py-1"><a href="#">تواصل معنا</a></li>
                </ul>
            </div>
        </div>
        <span className="text-md italic text-white">All  rights reserved , 2023 </span>
      </div>
  )
}

export default Footer;