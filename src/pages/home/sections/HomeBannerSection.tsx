import image from "/image.png";
import x from "/x.png";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedIn from "/linkedIn.png";
import download from "/download.png";
import resume from "/my_resume.pdf";
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
                        Full Stack Developer
                    </p>
                    <div className="flex flex-row gap-3 justify-center lg:justify-start">
                        <a href="https://github.com/frenzycoder7" target="_blank" rel="noreferrer"> <img src={github} alt="github" className="w-8 h-8" /> </a>
                        <a href="https://www.instagram.com/frenzycoder" target="_blank" rel="noreferrer"> <img src={instagram} alt="instagram" className="w-8 h-8" /> </a>
                        <a href="https://www.linkedin.com/in/gaurav-kumar-1360b3231/" target="_blank" rel="noreferrer"> <img src={linkedIn} alt="linkedIn" className="w-8 h-8" /> </a>
                        <a href="https://x.com/frenzycoder" target="_blank" rel="noreferrer"> <img src={x} alt="resume" className="w-8 h-8" /> </a>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-5">
                        <button className="btn btn-secondary" onClick={() => {
                            window.open(resume, "_blank")
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
