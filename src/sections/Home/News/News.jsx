import NewsCard from "./NewsCard";

const News = ()=> {
    const data = ['1','1','1']
    return (
        <div className="py-10 bg-[#F2F2F2]">
            <div className="text-[#03989E] bg-gray-200 py-3 rounded-xl text-xl font-semibold w-1/3 m-auto mb-6 px-5 text-center">
                قصص نجاح 
            </div>
            <div className="grid grid-cols-3 gap-8 my-10 px-40 items-center">
                {
                    data.map((data, index)=> (
                        <NewsCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default News;