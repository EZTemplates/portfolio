import x from "/x.png";
import github from "/github.png";
import instagram from "/instagram.png";
import linkedIn from "/linkedIn.png";
import email from "/email.png";
import phone from "/phone.png";
import { useFetchProfile } from "../../core/hooks/useFetchProfile";
import MyProfileComponentShimmer from "../../components/shimmers/MyProfileComponentShimmer";
import ProfileLinks from "./ProfileLinks";

export default function MyProfileComponent() {
    const { isLoading, data } = useFetchProfile();

    if (isLoading) {
        return <MyProfileComponentShimmer />;
    }

    // Fallback values for when data is null or fields are missing
    const profileData = {
        image: data?.image || "https://biosites.in/favicon.ico",
        name: data?.name || "Not Available",
        current_role: data?.current_role || "Not Available",
        current_location: data?.current_location || "Not Available",
        github_link: data?.github_link || null,
        linkedin_link: data?.linkedin_link || null,
        instagram_link: data?.instagram_link || null,
        x_link: data?.x_link || null,
        short_info: data?.short_info || "Not Available",
        number: data?.number || "Not Available",
        email: data?.email || "Not Available",
        resume_link: data?.resume_link || null,
    };

    return (
        <div className="w-full bg-transparent">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-5">
                    {/* Avatar Section */}
                    <div className="relative mb-3">
                        <div className="ring-2 ring-indigo-400 ring-offset-2 ring-offset-gray-800 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                            <img src={profileData.image} alt={profileData.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 right-0 bg-emerald-500 text-white text-[7px] xs:text-[8px] sm:text-[8px] px-1.5 py-0.5 rounded-full shadow-sm">
                            <span className="flex items-center">
                                <span className="h-1 w-1 bg-white rounded-full mr-0.5"></span>
                                Available
                            </span>
                        </div>
                    </div>

                    {/* Name and Title */}
                    <h1 className="text-xl sm:text-xl md:text-2xl font-bold mb-1">
                        <span className="text-gray-300 text-base sm:text-base md:text-lg font-light">I'M </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">{profileData.name}</span>
                    </h1>

                    <p className="text-sm sm:text-sm md:text-base text-gray-300 mb-3 font-medium">
                        <span className="relative px-3 py-1 inline-block">
                            <span className="relative z-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 drop-shadow-lg">{profileData.current_role}</span>
                            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-900/50 to-blue-900/50 shadow-inner"></span>
                        </span>
                    </p>

                    {/* Location */}
                    {profileData.current_location && profileData.current_location !== "Not Available" && (
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4 0-7 2.239-7 5v2a1 1 0 001 1h12a1 1 0 001-1v-2c0-2.761-3-5-7-5z" />
                            </svg>
                            <span className="text-sm text-gray-300">{profileData.current_location}</span>
                        </div>
                    )}
                    {(!profileData.current_location || profileData.current_location === "Not Available") && (
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4 0-7 2.239-7 5v2a1 1 0 001 1h12a1 1 0 001-1v-2c0-2.761-3-5-7-5z" />
                            </svg>
                            <span className="text-sm text-gray-400">Not Available</span>
                        </div>
                    )}

                    {/* Social Icons */}
                    <div className="flex gap-3 justify-center mb-3">
                        {profileData.github_link && <ProfileLinks link={profileData.github_link} icon={github} alt="GitHub" />}
                        {profileData.linkedin_link && <ProfileLinks link={profileData.linkedin_link} icon={linkedIn} alt="LinkedIn" />}
                        {profileData.instagram_link && <ProfileLinks link={profileData.instagram_link} icon={instagram} alt="Instagram" />}
                        {profileData.x_link && <ProfileLinks link={profileData.x_link} icon={x} alt="X" />}
                        {!profileData.github_link && !profileData.linkedin_link && !profileData.instagram_link && !profileData.x_link && (
                            <span className="text-gray-400 text-xs">No Social Links Available</span>
                        )}
                    </div>

                    {/* Bio */}
                    <div className="w-full">
                        <p className="text-gray-300 text-sm max-w-lg mx-auto">
                            {profileData.short_info}
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full space-y-2 mb-3">
                        {profileData.number && profileData.number !== "Not Available" ? (
                            <div className="flex items-center justify-center gap-2 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-gray-700/60 transition-all">
                                <img src={phone} alt="Phone" className="w-4 h-4" />
                                <span className="font-medium text-gray-200 text-sm">{profileData.number}</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2 backdrop-blur-sm px-3 py-2 rounded-lg bg-gray-700/30">
                                <img src={phone} alt="Phone" className="w-4 h-4" />
                                <span className="font-medium text-gray-400 text-sm">Not Available</span>
                            </div>
                        )}
                        {profileData.email && profileData.email !== "Not Available" ? (
                            <div className="flex items-center justify-center gap-2 backdrop-blur-sm px-3 py-1 rounded-lg hover:bg-gray-700/60 transition-all">
                                <img src={email} alt="Email" className="w-4 h-4" />
                                <span className="font-medium text-gray-200 text-sm">{profileData.email}</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2 backdrop-blur-sm px-3 py-1 rounded-lg bg-gray-700/30">
                                <img src={email} alt="Email" className="w-4 h-4" />
                                <span className="font-medium text-gray-400 text-sm">Not Available</span>
                            </div>
                        )}
                    </div>

                    {/* Resume Button */}
                    {profileData.resume_link ? (
                        <a
                            href={profileData.resume_link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 text-white px-4 py-2.5 rounded-lg text-sm md:text-base font-medium shadow-md hover:shadow-lg"
                        >
                            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span className="font-medium">Download Resume</span>
                        </a>
                    ) : (
                        <button
                            className="w-full flex items-center justify-center gap-2 bg-gray-700/30 text-gray-400 px-4 py-2.5 rounded-lg text-sm md:text-base font-medium shadow-md cursor-not-allowed"
                            disabled
                        >
                            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span className="font-medium">Resume Not Available</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
