import { logo } from "../assets/images";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    return (
        <div className="bg-gray-500 bg-opacity-50 flex items-center text-white justify-between py-3 px-6 absolute z-10 w-full rounded-t-3xl">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 mr-4">
                    <div className="h-6 w-6 rounded-full border border-white"></div>
                    <span>العربية</span>
                </div>
                <button className="bg-[#03989E] px-6 py-2 rounded-2xl">التسجيل</button>
                <button className="px-6 bg-transparent border border-white py-2 rounded-2xl">تسجيل الدخول</button>
            </div>
            <div>
                <ul className="flex items-center gap-3">
                    <li className="p-3">
                        <Link className="border-b-2 border-b-white pb-3" to="/">أخبار صناديقنا</Link>
                    </li>
                    <li className="p-3">
                        <Link className="border-b-2 border-b-white pb-3" to="/">مركز المساعدة</Link>
                    </li>
                    <li className="p-3">
                        <Link className="border-b-2 border-b-white pb-3" to="/">الفرص الاستثمارية</Link>
                    </li>
                    <li className="p-3">
                        <Link className="border-b-2 border-b-white pb-3" to="/">اضف فرصتك</Link>
                    </li>
                    <li className="p-3">
                        <Link className="border-b-2 border-b-white pb-3" to="/">استثمر</Link>
                    </li>
                </ul>
            </div>
            <div>
                <img className="w-full h-full max-h-16" src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Navbar;