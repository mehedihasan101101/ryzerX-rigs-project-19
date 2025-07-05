
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
                <p className="ml-2 text-justify mt-2  text-[#6b6b6f]">
                    Welcome to RyzerX Rigs — where performance meets precision.
                    We’re a dedicated team of tech enthusiasts with one clear goal: to help you find the perfect rig without the guesswork. Whether you're a gamer, a creative professional, or someone who just wants a reliable machine, we make it easy to compare laptops, desktops, and components based on real stats, ratings, and up-to-date pricing.

                    At RyzerX, we believe that choosing the right tech shouldn't be complicated. That’s why we bring together data-driven insights, honest reviews, and simple tools to guide your decision. We don’t just list specs — we give you clarity.

                    From power-packed gaming systems to budget-friendly workstations, RyzerX Rigs is here to support your journey, every step of the way.
                </p>

                <p className="ml-2 text-justify mt-2 text-[#6b6b6f]">
                    At RyzerX Rigs, our mission is to empower gamers and creators by delivering cutting-edge, custom-built high-performance rigs that combine innovation, reliability,
                    and style. We are committed to providing exceptional quality, personalized service, and the latest technology to help our customers achieve peak performance and
                    immersive experiences.
                </p>
                <p className="ml-2 text-justify mt-2 text-[#6b6b6f]">
                    Our vision at RyzerX Rigs is to become a global leader in custom gaming and high-performance computer rigs, revolutionizing how users experience technology through innovation, sustainability, and unparalleled customer satisfaction. We strive to build a passionate community united by excellence, creativity, and a shared love for gaming and technology.
                </p>
                <div className="mt-5">
                    <h1 className="text-2xl font-bold text-center">Contact Information</h1>
                    <div className="flex">
                        <div>
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
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default AboutUs;