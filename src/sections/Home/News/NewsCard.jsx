import { company } from "../../../assets/images";

const NewsCard = ({ index }) => {
    return (
        <div key={index} className="relative bg-white rounded-xl px-10 text-gray-400 text-center py-8 pt-10">
            <div>
                <img src={company} className="rounded-full h-16 w-16 m-auto" />
            </div>
            <h3 className="font-semibold mt-10">فوربس الشرق الأوسط </h3>
            <p className="text-sm text-end mt-6 mb-10">
            شركة سيركليز ترفع قيمتها بعد حصولها 
على استثمار بقيمة 5 مليون ريال من منصة سكوبير المالية.  
كبراء المستثمرين يتوقعون زيادة في قيمة الشركة حتى وصولها الى 100 مليون ريال سعودي خلال الأشهر القادمة. 
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="h-1 w-40 bg-black"></div>
            </div>
        </div>
    )
}

export default NewsCard;