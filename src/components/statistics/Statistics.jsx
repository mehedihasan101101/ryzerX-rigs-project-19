import { useLoaderData } from 'react-router';
import Chart from './Chart';


const Statistics = () => {
    const data = useLoaderData()
    return (
        <>
            <div className="bg-gray-200 flex flex-col items-center space-y-2 md:py-17 py-12">
                <h1 className="text-[32px] font-bold">Statistics</h1>
                <p className="text-[#6b6b6f] text-center max-w-[1000px] ">Explore detailed insights on product pricing and user ratings.
                    Use the chart to identify high-rated, cost-effective options and make informed purchasing decisions with confidence.</p>

            </div>

            <div className='lg:max-w-[87%] max-w-[98%]  m-auto mt-6 mb-15'>
                <h1 className='text-2xl font-bold'>Statistic</h1>
                <div className='flex items-center justify-center w-full border border-gray-200 rounded-xl mt-5'>
                    <Chart data={data}></Chart >
                </div>
            </div>
        </>

    );
};

export default Statistics;