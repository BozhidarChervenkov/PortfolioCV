const ProfessionalExperience = () => {
    return (
        <div name='professionalExperience' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='pb-8 w-full flex justify-center items-center flex-col'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500 '>
                    Professional Experience
                </p>

                <div className="flex flex-col justify-center items-center w-full h-full mt-10">
                    <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                            <div className="sm:text-left text-3xl font-bold">
                                <p>
                                    Code Assistance:
                                    <hr />
                                    <br />
                                    May 2022 - December 2023
                                </p>
                            </div>
                            <div className="image-container">
                                <img src="/companyLogos/codeAssistanceLogo.jpg" alt="Code Assistance Logo" class="image" style={{ width: '10 rem', height: '10rem', borderRadius: '5%', marginLeft: 150 }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-full mt-10">
                    <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                            <div className="sm:text-left text-3xl font-bold">
                                <p>
                                    Deltek:
                                    <hr />
                                    <br />
                                    December 2023 - Present
                                </p>
                            </div>
                            <div className="image-container">
                                <img src="/companyLogos/deltekLogo.png" alt="Deltek Logo" class="image" style={{ width: '25 rem', height: '10rem', borderRadius: '5%', marginLeft: 150 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;