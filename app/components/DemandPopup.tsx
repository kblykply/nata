"use client";
import React, { useMemo, useState } from "react";

interface DemandPopupProps {
  onClose: () => void;
  projects: { title: string }[];
  selectedProject: string;
}

export default function DemandPopup({
  onClose,
  projects,
  selectedProject,
}: DemandPopupProps) {
  const initialProject = useMemo(() => {
    if (selectedProject && projects.some(p => p.title === selectedProject)) return selectedProject;
    return projects[0]?.title ?? "";
  }, [projects, selectedProject]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: initialProject,
    message: "",
    email: "salihkaaankoc@gmail.com", // gerekirse değiştir
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      project_name: formData.project,
      message: formData.message.trim(),
      email: formData.email.trim(),
    };

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        // data.body sunucudan dönen ham hata metni olabilir
        throw new Error(
          data?.error ||
          data?.body ||
          `Form gönderilemedi (status: ${res.status}).`
        );
      }

      alert("Talebiniz başarıyla gönderildi. Teşekkürler!");
      onClose();
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err?.message ?? "Form gönderilirken bir hata oluştu.");
      alert(err?.message ?? "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-3 top-2 text-xl font-bold text-gray-500 hover:text-gray-700"
          aria-label="Kapat"
        >
          ×
        </button>

        <h3 className="mb-4 text-center text-lg font-semibold">Ön Talep Formu</h3>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium">Ad Soyad</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2"
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
              inputMode="tel"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Proje Seçin</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2"
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
              rows={3}
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {errorMsg && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-[#ab1e3b] py-2 text-white transition hover:bg-[#901932] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Gönderiliyor..." : "Gönder"}
          </button>
        </form>
      </div>
    </div>
  );
}
