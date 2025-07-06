import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, CartesianGrid, } from 'recharts';

const Chart = ({ data }) => {
    return (
        <div className='w-full flex items-center justify-center py-5 '>
            <ResponsiveContainer width="100%" height={500}>
                <ComposedChart width={500} height={400} data={data}>
                    <XAxis dataKey="product_title" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="price" barSize={30} fill="#9538E2" />
                    <Area type="monotone" dataKey="rating" fill="#9538E2" stroke="#BF87EE" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;