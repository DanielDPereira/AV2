import React, { type ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-lg border-b border-outline-variant">
          <h2 className="text-h3 font-h3 text-on-surface">{title}</h2>
          <button 
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-variant"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <div className="p-lg overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
