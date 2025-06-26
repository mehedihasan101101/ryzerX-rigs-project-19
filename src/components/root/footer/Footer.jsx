
const Footer = () => {
    return (
        <footer className="shadow-2xl mt-30 ">
            <div className="lg:max-w-[90%] m-auto space-y-3">
                <h1 className="font-extrabold text-3xl text-center ">RyzerX</h1>
                <p className="text-center text-[18px] text-[#6b6b6f]">Leading the way in cutting edge technology and innovation.</p>
                <  hr className="text-[#e7e7e7] " />
                <div className="flex justify-around">
                    <div>
                        <h1 className="font-bold text-xl pb-3">Services</h1>
                        <p className="text-[#6b6b6f]">Product Support</p>
                        <p className="text-[#6b6b6f]">Order Tracking</p>
                        <p className="text-[#6b6b6f]">Shipping & Delivery</p>
                        <p className="text-[#6b6b6f]">Return</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl pb-3">Company</h1>
                        <p className="text-[#6b6b6f]">About Us</p>
                        <p className="text-[#6b6b6f]">Careers</p>
                        <p className="text-[#6b6b6f]">Contact</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl pb-3">Legal</h1>
                        <p className="text-[#6b6b6f]">Terms of Service</p>
                        <p className="text-[#6b6b6f]">Privacy Policy</p>
                        <p className="text-[#6b6b6f]">Cookie Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;