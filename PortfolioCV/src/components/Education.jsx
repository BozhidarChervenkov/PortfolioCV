const Education = () => {
    return (
        <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mt-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Education</p>
                </div>

                {/* SoftUni item */}
                <div className="education-container">
                    <div>
                        <div className="image-container">
                            <img className="education-img" src="/universityLogos/softUniLogo.png" alt="SoftUniLogo" />
                            <h3 className=".education-header">Software University "SoftUni"</h3>
                        </div>
                        <p className="date">2019-2022</p>
                        <hr />
                        <p className="education-description">Studied programming language C# and Web development with ASP.NET Core</p>
                    </div>
                </div>

                {/* Academic Lyudmil Stoyanov item */}
                <div className="education-container">
                    <div>
                        <div className="image-container">
                            <img className="education-img" src="/universityLogos/egLogo.jpg" alt="SWU logo" />
                            <h3>Language High School "Academic Lyudmil Stoyanov"</h3>
                        </div>
                        <p className="date">2015-2019</p>
                        <hr />
                        <p className="education-description">Studied English, Information technology and informatics</p>
                    </div>
                </div>

                {/* South-West University Neofit Rilski item */}
                <div className="education-container">
                    <div>
                        <div className="image-container">
                            <img className="education-img" src="/universityLogos/swuLogo.jpg" alt="Language school logo" />
                            <h3>South-West University Neofit Rilski</h3>
                        </div>
                        <p className="date">2019-2024</p>
                        <hr />
                        <p className="education-description">- Bachelor's degree (Computer systems and technologies)</p>
                        <p className="education-description">- Master's degree (Electronics)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;