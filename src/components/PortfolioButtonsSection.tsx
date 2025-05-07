import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { useFetchSLinks } from '../core/hooks/useFetchSLinks';
import PortfolioButtonsShimmer from './shimmers/PortfolioButtonsShimmer';
import { ISocialLink } from '../core/interface/social_link_interface';


export default function PortfolioButtonsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { data, isLoading } = useFetchSLinks();

    useEffect(() => {
        if (containerRef.current) {
            animate(containerRef.current, {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1000,
                easing: 'easeOutQuad'
            });

            animate('.portfolio-btn', {
                scale: [0.9, 1],
                opacity: [0, 1],
                delay: (_: unknown, i: number) => 300 + (i * 100),
                duration: 600,
                easing: 'easeOutElastic(1, .6)'
            });
        }
    }, [data]);

    if (isLoading) {
        return <PortfolioButtonsShimmer />;
    }

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap justify-start gap-3 bg-gray-800/60 p-4 rounded-2xl shadow-xl w-full backdrop-blur-md">
            {data.map((button: ISocialLink) => (
                <a
                    key={button._id}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-2 py-0.5 rounded-lg bg-gradient-to-r text-white text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
                    style={{
                        background: `linear-gradient(to right, ${button.config.btn_color}, ${adjustColor(button.config.btn_color, -20)})`,
                        borderColor: `${button.config.btn_color}30`
                    }}
                >
                    <div className=" p-1.5 mr-0.5">
                        <img
                            src={button.config.logo}
                            alt={button.config.name}
                            className="h-4 w-4"
                        />
                    </div>
                    <span className="group-hover:tracking-wide transition-all text-sm font-light">
                        {button.config.name}
                    </span>
                </a>
            ))}
        </div>
    );
}

// Helper function to adjust color brightness
function adjustColor(color: string, amount: number): string {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
