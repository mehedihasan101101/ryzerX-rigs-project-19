
import heroSectionImage from '../../assets/heroSectionImg.jpg'

const Herosection = () => {
    return (
        <>
            <div className="lg:max-w-[90%] max-w-[98%] m-auto px-4  bg-gray-300 rounded-2xl flex flex-col items-center space-y-5 pt-30 lg:pb-75 md:pb-60 pb-33 mt-[-85px] lg:mt-[-92px]">
                <h1 className="lg:text-[56px] md:text-[50px] text-3xl max-w-[1000px] text-center font-bold  ">Enhance Your Gaming and Workstation Setup with RyzerX Rigs</h1>
                <p className="text-[#6b6b6f]  text-[14px] text-center max-w-[800px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories,
                    we have it all!</p>
                <button className="btn rounded-4xl">Shop Now</button>
            </div>
            <div className="lg:w-[50%] w-[70%] m-auto p-5 lg:mt-[-260px] md:mt-[-200px] mt-[-110px] border border-white  rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
                <div>
                    <img className=' w-full lg:h-[500px] md-' src={heroSectionImage} alt="" />
                </div>

            </div>


        </>


    );
};

export default Herosection;