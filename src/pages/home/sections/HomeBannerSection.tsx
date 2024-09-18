import image from "/image.png";
import x from "/x.png";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedIn from "/linkedIn.png";
import download from "/download.png";
import email from "/email.png";
import phone from "/phone.png";

export default function HomeBannerSection() {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt="Image" className="object-cover hidden lg:block h-full" />
                <div className="avatar lg:hidden" >
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src={image} alt="Image" />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl text-center lg:text-start lg:text-6xl font-bold text-secondary">
                        <span className="text-2xl lg:mr-2 text-black ">I'M </span>
                        Gaurav Singh
                    </h1>
                    <p className="py-2 text-center lg:text-start text-2xl">
                        Software Engineer
                    </p>
                    <div className="flex flex-row gap-3 justify-center lg:justify-start">
                        <a href="https://github.com/frenzycoder7" target="_blank" rel="noreferrer"> <img src={github} alt="github" className="w-8 h-8" /> </a>
                        <a href="https://www.instagram.com/frenzycoder" target="_blank" rel="noreferrer"> <img src={instagram} alt="instagram" className="w-8 h-8" /> </a>
                        <a href="https://www.linkedin.com/in/gaurav-kumar-1360b3231/" target="_blank" rel="noreferrer"> <img src={linkedIn} alt="linkedIn" className="w-8 h-8" /> </a>
                        <a href="https://x.com/frenzycoder" target="_blank" rel="noreferrer"> <img src={x} alt="resume" className="w-8 h-8" /> </a>
                    </div>
                    <p className="py-1 text-center lg:text-start">
                        I am a software engineer with 3+ years of experience in building web & mobile applications using React, Node, Flutter , Swift and MongoDB. I am passionate about learning new technologies and building scalable applications.
                    </p>

                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex flex-row items-center">
                            <img src={email} alt="email" className="w-6 h-6 mt-1 mr-2" />
                            <span className="font-semibold link-hover"> connect@igaurav.dev </span>
                        </div>
                        <div className="flex flex-row items-center">
                            <img src={phone} alt="email" className="w-6 h-6 mt-1 mr-2" />
                            <span className="font-semibold link-hover"> +91 9262715527</span>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-start mt-2">
                        <button className="btn btn-secondary" onClick={() => {
                            window.open("https://drive.google.com/file/d/1hvv3z_V8HPcTVPCzjCMokPCfb7K4aDGN/view?usp=drivesdk", "_blank")
                        }}>
                            <img src={download} alt="" className="w-6 h-6" />
                            <span className="text-white font-normal">
                                Download Resume
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
