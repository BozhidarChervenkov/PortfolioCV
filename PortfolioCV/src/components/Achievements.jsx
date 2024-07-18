import Carousel from "./Helpers/Carousel";

const slides = [
    '/certificates/ASP.NET Core  Certificate.jpeg',
];

const Achievements = () => {
    return (
        <div name='achievements' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className=' w-full flex justify-center items-center flex-col mt-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center mt-5'>
                        Achievements
                    </p>

                    <Carousel >
                        {
                            slides.map((s) => (
                                <img className = "certificates-img" src={s} />
                            ))
                        }
                    </Carousel>

                </div>
            </div>
        </div>
    );
}

export default Achievements;