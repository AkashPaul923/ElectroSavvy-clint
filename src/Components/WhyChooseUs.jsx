import { FaHeadset, FaMask, FaHandsWash, FaHandHolding } from "react-icons/fa";
import worker from "../assets/worker.png";

const WhyChooseUs = () => {
  return (
    <section className=" py-20 px-5 bg-base-300">
        <div className="max-w-6xl mx-auto text-center" >
            <h2 className="text-2xl font-bold  mb-4" data-aos="zoom-in" data-aos-duration="1000" >WHY CHOOSE US</h2>
            <p className="text-lg  mb-8" data-aos="zoom-in" data-aos-duration="1000">Because we care about your safety..</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right" data-aos-duration="1000">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center bg-base-100 hover:bg-base-200 border-2 rounded-lg p-5">
                        <FaMask className="text-pink-500 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold ">Ensuring Masks</h3>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col items-center bg-base-100 hover:bg-base-200 border-2 rounded-lg p-5">
                        <FaHeadset className="text-pink-500 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold ">24/7 Support</h3>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col items-center bg-base-100 hover:bg-base-200 border-2 rounded-lg p-5">
                        <FaHandsWash className="text-pink-500 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold ">Sanitizing Hands & Equipment</h3>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-col items-center bg-base-100 hover:bg-base-200 border-2 rounded-lg p-5">
                        <FaHandHolding className="text-pink-500 text-4xl mb-4" />
                        <h3 className="text-lg font-semibold ">Ensuring Gloves</h3>
                    </div>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="1000">
                    <img src={worker} alt="Safety Ensured" className="rounded-lg w-full object-cover" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;
