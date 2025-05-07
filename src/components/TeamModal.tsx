/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TeamModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any; // Replace with your project type
}

export default function TeamModal({ isOpen }: TeamModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto">
                {/* ... rest of your modal content ... */}
            </div>
        </div>,
        document.body
    );
} 