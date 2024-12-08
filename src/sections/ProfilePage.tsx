import image from "/image.png";
import x from "/x.png";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedIn from "/linkedIn.png";
import email from "/email.png";
import phone from "/phone.png";

export default function ProfilePage() {
    return (
        <div>
            <div className="hero-content flex-col">
                <div className="avatar " >
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src={image} alt="Image" />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl text-center font-bold text-indigo-600">
                        <span className="text-2xl  text-black ">I'M </span>
                        Gaurav Singh
                    </h1>
                    <p className="py-2 text-center">
                        Software Engineer
                    </p>
                    <div className="flex flex-row gap-3 justify-center">
                        <a href="https://github.com/frenzycoder7" target="_blank" rel="noreferrer"> <img src={github} alt="github" className="w-8 h-8" /> </a>
                        <a href="https://www.instagram.com/frenzycoder" target="_blank" rel="noreferrer"> <img src={instagram} alt="instagram" className="w-8 h-8" /> </a>
                        <a href="https://www.linkedin.com/in/gaurav-kumar-1360b3231/" target="_blank" rel="noreferrer"> <img src={linkedIn} alt="linkedIn" className="w-8 h-8" /> </a>
                        <a href="https://x.com/frenzycoder" target="_blank" rel="noreferrer"> <img src={x} alt="resume" className="w-8 h-8" /> </a>
                    </div>
                    <p className="py-1 text-center text-sm">
                        I am a software engineer with 3+ years of experience in building web & mobile applications using React, Node, Flutter , Swift and MongoDB. I am passionate about learning new technologies and building scalable applications.
                    </p>

                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center">
                            <img src={email} alt="email" className="w-6 h-6 mt-1 mr-2" />
                            <span className="font-semibold link-hover"> connect@igaurav.dev </span>
                        </div>
                        <div className="flex flex-row items-center">
                            <img src={phone} alt="email" className="w-6 h-6 mt-1 mr-2" />
                            <span className="font-semibold link-hover"> +91 9262715527</span>
                        </div>
                    </div>

                    <div className="flex justify-center mt-2">
                        <a
                            href="https://drive.google.com/file/d/1hvv3z_V8HPcTVPCzjCMokPCfb7K4aDGN/view?usp=drivesdk"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            <span className="font-medium">
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
