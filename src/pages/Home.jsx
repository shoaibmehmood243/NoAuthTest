import Card from "../sections/Home/Card";
import News from "../sections/Home/News/News";
import Properties from "../sections/Home/Properties/Properties";
import Services from "../sections/Home/Services/Services";

const Home = () => {
    return (<>
        <div className="relative w-full pt-[50%] heroSection bg-no-repeat bg-cover bg-bottom bg-gray-500"></div>
        <Properties />
        <div className="bg-[#03989E] pt-20 pb-28 px-20 text-white text-end">
            <h3 className="text-lg font-bold mb-4">لماذا التمويل الجماعي ؟ </h3>
            <p className="w-1/2 ml-auto">من خلال عرض شركتك عبر التمويل الجماعي ، سيكون بإمكانك الوصول إلى الآلاف من المستثمرين المستعدين للاستثمار وتسريع الجولة الاستثمارية  الخاصة بشركتك الناشئة من خلال عرض شركتك عبر التمويل الجماعي ، سيكون بإمكانك الوصول إلى الآلاف من المستثمرين المستعدين  للاستثمار وتسريع الجولة الاستثمارية  الخاصة بشركتك الناشئة.</p>
        </div>
        <Services />
        <div className="bg-[#03989E] pt-20 pb-28 px-32 text-white">
            <div className="flex items-center gap-10 justify-between">
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
        <News />
        <div className="bg-white py-32 px-20 text-gray-400 text-end">
            <p className="text-md w-3/4 ml-auto tracking-wide">بناءً على نظام السوق المالية الصادر بالمرسوم الملكي رقم (م/30) وتاريخ ‏‏2/6/1424هـ وتعليمات تصريح تجربة التقنية
                المالية الصادرة عن المجلس بتاريخ 23/4/1439هـ الموافق 10/1/2018م، والتي تهدف إلى توفير إطار تنظيمي يدعم
                ابتكار التقنية المالية (فينتك) في السوق المالية بالمملكة، أصدر مجلس الهيئة قراره بالموافقة
                على طلب تصريح تجربة التقنية المالية </p>
        </div>
        <div className="bg-[#F2F2F2] py-20 pr-12">
            <div className="pb-32 pt-20 px-10 rounded-r-3xl bg-[#03989E] text-end">
                <span className="text-[#03989E] bg-white py-3 px-6 font-semibold rounded-2xl">تحذير المخاطرة</span>
                <p className="text-white mt-8 w-3/4 ml-auto tracking-widest">آويس المالية  هي منصة للتقنية المالية مسجلة رسمياً في المملكة العربية السعودية تحت اسم "شركة أويس الاصول لتقنية المالية في أعمالالأوراق المالية شركة شخص واحد" بسجل تجاري رقم (1010851446) بتاريخ (09/06/1444) كشركة طرح أدوات الدين والاستثمار فيها مسجلة في المملكة العربية السعودية

                    طرح أدوات الدين والاستثمار فيها  هو نوع من المعاملات المالية والاستثمارات عالية المخاطر التي تنطوي على مخاطر فقدان رأس المال المستثمر أو فقدان حقوق . لا تتحمل شركة آويس المالية أو شركاؤها أو موظفوها مسؤولية أي نوع من الخسائر المالية. يجب على جميع الذين يرغبون في استثمار أموالهم من خلال منصة آويس المالية أخذ الحيطة والحذر ومعرفة مخاطر الاستثمار  والتأكد من كل خطوة يقومون بها في استثمار أموالهم.

                    توفر منصة آويس المالية للمستثمرين فرصًا للاستثمار مع الشركات التي ترغب بطرح صكوكها

                    تخضع جميع الإجراءات والأنشطة المنفذة على منصة آويس المالية لقوانين وأنظمة المملكة العربية السعودية. لا تقدم آويس المالية أي نصيحة أو ضمان أو توصية على مستوى المخاطر القانونية أو المالية أو الاستثمارية ، ويجب على المستثمر تخفيف مخاطر الاستثمار عن طريق الاستفادة من مستشارين موثوق بهم في هذا المجال</p>
            </div>
        </div>
    </>)
}

export default Home;