import ServiceCard from "./ServiceCards";

const Services = ()=> {
    const data = ['1','1','1','1','1','1']
    return (
        <div className="py-10 bg-[#F2F2F2]">
            <div className="text-[#03989E] bg-gray-200 py-3 rounded-xl text-lg font-semibold w-1/2 m-auto mb-6 px-5 text-center">
            قصص نجاح 
            </div>
            <div className="grid grid-cols-3 gap-8 my-10 px-40 items-center">
                {
                    data.map((data, index) => (
                        <ServiceCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services;