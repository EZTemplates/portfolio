import building from "/icons/building.svg";
import mail from "/icons/mail.svg";
import phone from "/icons/phone.svg";
export default function HomeContactUsSection() {
    return (

        <div className='p-5 container m-auto flex lg:flex-row flex-col'>
            {/* <span className='text-center lg:text-5xl text-2xl'>Contact With Me</span>
            <div className="flex flex-row">
                <div className="bg-base-100 w-full max-w-sm shrink-0 ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="Your Message" className="input-bordered textarea textarea-ghost" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary text-white font-mono text-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div> */}

            <div data-theme="bumblebee" className="flex flex-col p-5 lg:w-full bg-slate-100 rounded-md">
                <span className="text-center lg:text-start text-2xl lg:text-3xl font-bold mb-5">Get in touch</span>
                <span className="text-center font-serif lg:text-start">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</span>
                <div className="card rounded-sm">
                    <div className="flex flex-row py-5">
                        <img src={building} alt="" className="h-6 w-6" />
                        <span className="text-lg ml-3 font-medium">Noida, UP,  India</span>
                    </div>
                </div>
                <div className="card rounded-sm">
                    <div className="flex flex-row py-5">
                        <img src={phone} alt="" className="h-6 w-6" />
                        <span className="text-lg ml-3 font-medium">+91 9262715527</span>
                    </div>
                </div>
                <div className="card rounded-sm">
                    <div className="flex flex-row py-5">
                        <img src={mail} alt="" className="h-6 w-6" />
                        <span className="text-lg ml-3 font-medium">connect@igaurav.dev</span>
                    </div>
                </div>
            </div>
            <form className="card-body w-full">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea placeholder="Your Message" className="input-bordered textarea textarea-ghost" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary text-white font-mono text-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}
