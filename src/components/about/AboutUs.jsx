
const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-200 flex flex-col items-center space-y-2 md:py-17 py-12">
                <h1 className="text-[32px] font-bold">About Us</h1>
                <p className="text-[#6b6b6f] text-center max-w-[1000px] ">Welcome to our About Us page — here, you’ll get to know everything about RyzerX Rigs.
                    Learn who we are, what drives us, and how we’re making it easier for tech enthusiasts, gamers, and professionals to choose the perfect rig</p>
            </div>
            <div className="lg:max-w-[87%] max-w-[98%] m-auto mt-5">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p className="ml-2 text-justify mt-2  text-[#6b6b6f] pr-2">
                    Welcome to RyzerX Rigs — where performance meets precision.
                    We’re a dedicated team of tech enthusiasts with one clear goal: to help you find the perfect rig without the guesswork. Whether you're a gamer, a creative professional, or someone who just wants a reliable machine, we make it easy to compare laptops, desktops, and components based on real stats, ratings, and up-to-date pricing.

                    At RyzerX, we believe that choosing the right tech shouldn't be complicated. That’s why we bring together data-driven insights, honest reviews, and simple tools to guide your decision. We don’t just list specs — we give you clarity.

                    From power-packed gaming systems to budget-friendly workstations, RyzerX Rigs is here to support your journey, every step of the way.
                </p>

                <p className="ml-2 text-justify mt-2 text-[#6b6b6f] pr-2">
                    At RyzerX Rigs, our mission is to empower gamers and creators by delivering cutting-edge, custom-built high-performance rigs that combine innovation, reliability,
                    and style. We are committed to providing exceptional quality, personalized service, and the latest technology to help our customers achieve peak performance and
                    immersive experiences.
                </p>
                <p className="ml-2 text-justify mt-2 text-[#6b6b6f] pr-2">
                    Our vision at RyzerX Rigs is to become a global leader in custom gaming and high-performance computer rigs, revolutionizing how users experience technology through innovation, sustainability, and unparalleled customer satisfaction. We strive to build a passionate community united by excellence, creativity, and a shared love for gaming and technology.
                </p>
                <div className="mt-9">
                    <h1 className="text-2xl font-bold text-center">Contact Information</h1>
                    <div className="flex lg:flex-row flex-col gap-5 justify-between mt-7 px-2  ">
                        <div className="">
                            <h1 className="font-bold">Headquarters (USA): </h1>
                            <address>
                                RyzerX Rigs Headquarters <br />
                                1234 Tech Drive, Suite 100 <br />
                                Silicon Valley, CA 94043 <br />
                                United States
                            </address>
                            <h1 className="font-bold">Portugal Office: </h1>
                            <address>
                                RyzerX Rigs Portugal  <br />
                                Rua da Tecnologia, 45, 3º Andar <br />
                                Lisboa, 1000-123
                                Portugal
                            </address>
                        </div>
                        <div>
                            <h1 className="font-bold">Phone (USA): </h1>
                            <p>+1 (555) 123-4567</p>
                            <h1 className="font-bold">Phone (Portugal):
                            </h1>
                            <p>+351 21 123 4567</p>
                            <h1 className="font-bold">Email: </h1>
                            <p>support@ryzerxrigs.com</p>
                            <p>sales@ryzerxrigs.com</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Customer Support: </h1>
                            <p>Available Monday to Friday,<br /> 9:00 AM – 6:00 PM (PST) / 5:00 PM – 2:00 AM <br />(Portugal Time)</p>
                            <h1 className="font-bold">Support Hotline (USA):<span className=" font-medium "> +1 (555) 765-4321</span></h1>
                            <h1 className="font-bold">Support Hotline (Portugal):<span className=" font-medium "> +351 21 765 4321</span></h1>
                            <h1 className="font-bold">Live Chat:<span className=" font-medium "> Available on www.ryzerxrigs.com</span></h1>
                        </div>
                        <div>
                            <h1 className="font-bold">Social Media: </h1>
                            <h1 className="font-bold">Twitter:<span className=" font-medium "> @RyzerXRigs</span></h1>
                            <h1 className="font-bold">Facebook:<span className=" font-medium "> facebook.com/RyzerXRigs</span></h1>
                            <h1 className="font-bold">Instagram:<span className=" font-medium "> @RyzerXRigs</span></h1>
                        </div>
                    </div>

                </div>
                <div className="p-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202845.2009512165!2d-122.20590430130164!3d37.40268918019431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2spt!4v1751808084714!5m2!1sen!2spt"
                        className="w-full rounded" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div >


        </>
    );
};

export default AboutUs;