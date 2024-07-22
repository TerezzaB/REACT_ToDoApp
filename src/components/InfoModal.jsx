// src/components/InfoModal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

export default function InfoModal ({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-90 z-50">
      <div className="p-6 rounded shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto _modal">
        <h2 className="text-xl font-bold my-3">Info</h2>
        <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: content }}></div>
        <button className="my-6 px-4 py-2 bg-pink-800 text-white rounded" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};


