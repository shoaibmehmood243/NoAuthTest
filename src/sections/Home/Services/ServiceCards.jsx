const ServiceCard = ({ index }) => {
    return (
        <div>
            <div className="w-20 bg-[#03989E] rounded-lg h-20 m-auto rotate-45 mt-[-10px] z-10 relative top-5"></div>
            <div>
                <div key={index} className="relative bg-white rounded-xl px-10 text-gray-400 text-center py-8 pt-10">
                    <h3 className="font-bold">الوصول إلى المستثمرين</h3>
                    <p className="text-sm mt-3">من خلال عرض شركتك عبر التمويل الجماعي، سيكون بإمكانك الوصول إلى الآلاف من المستثمرين المستعدين للاستثمار وتسريع الجولة الاستثمارية الخاصة بشركتك الناشئة.</p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                        <div className="h-1 w-40 bg-[#03989E]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;