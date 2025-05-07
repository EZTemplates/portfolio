
interface FilterDropdownProps {
    isOpen: boolean;
    onClose: () => void;
    options: string[];
    selectedValue: string;
    onSelect: (value: string) => void;
    triggerRef: React.RefObject<HTMLButtonElement>;
    label: string;
}

export default function FilterDropdown({
    options,
    selectedValue,
    onSelect,
    label
}: FilterDropdownProps) {
    return (
        <select
            value={selectedValue}
            onChange={(e) => onSelect(e.target.value)}
            className="w-full md:w-48 border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                     rounded-lg px-3 py-2 focus:outline-none focus:ring-2 
                     focus:ring-indigo-500"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option === "All" ? `All ${label}` : option}
                </option>
            ))}
        </select>
    );
} 