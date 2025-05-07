
export default function ProfileLinks({
    link,
    icon,
    alt,
}: {
    link: string;
    icon: string;
    alt: string;
}) {
    return (
        <a
            key={link}
            href={link ?? "#"}
            target="_blank"
            rel="noreferrer noopener"
            className={`social-icon opacity-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-full transform transition-all hover:scale-110 hover:-translate-y-1`}
        >
            <img src={icon} alt={alt} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
    )
}
