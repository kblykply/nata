"use client";
import React, { useState } from "react";

interface DemandPopupProps {
  onClose: () => void;
  projects: { title: string }[];
  selectedProject: string;
}


export default function DemandPopup({ onClose, projects, selectedProject }: DemandPopupProps) {const [formData, setFormData] = useState({
  name: "",
  phone: "",
  project: selectedProject,
  message: "",
});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
<div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h3 className="text-lg font-semibold mb-4 text-center">Ön Talep Formu</h3>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium">Ad Soyad</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Proje Seçin</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            >
              {projects.map((proj, idx) => (
                <option key={idx} value={proj.title}>
                  {proj.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Mesaj (Opsiyonel)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ab1e3b] text-white py-2 rounded-md hover:bg-[#901932] transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
