"use client";
import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("demand");
  const tc = useTranslations("common");

  const initialProject = useMemo(() => {
    if (selectedProject && projects.some(p => p.title === selectedProject)) return selectedProject;
    return projects[0]?.title ?? "";
  }, [projects, selectedProject]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: initialProject,
    message: "",
    email: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    project: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    phone: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
      setErrorMessages({ ...errorMessages, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const nextErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      project: !formData.project.trim(),
    };
    setErrors(nextErrors);
    setErrorMessages({
      name: nextErrors.name ? tc("requiredField") : "",
      phone: nextErrors.phone ? tc("requiredField") : "",
      project: nextErrors.project ? tc("requiredField") : "",
    });
    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setSubmitting(true);

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
        throw new Error(
          data?.error ||
          data?.body ||
          `Form gönderilemedi (status: ${res.status}).`
        );
      }

      alert(t("submitSuccess"));
      onClose();
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(err?.message ?? t("submitError"));
      alert(err?.message ?? t("submitErrorRetry"));
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
          aria-label={tc("close")}
        >
          ×
        </button>

        <h3 className="mb-4 text-center text-lg font-semibold">{t("title")}</h3>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium">{t("nameSurname")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-md border px-3 py-2 ${
                errors.name ? "border-2 border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">{t("phone")}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="tel"
              className={`w-full rounded-md border px-3 py-2 ${
                errors.phone ? "border-2 border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">{t("selectProject")}</label>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              className={`w-full rounded-md border px-3 py-2 ${
                errors.project ? "border-2 border-red-500" : "border-gray-300"
              }`}
            >
              {projects.map((proj, idx) => (
                <option key={idx} value={proj.title}>
                  {proj.title}
                </option>
              ))}
            </select>
            {errors.project && (
              <p className="text-red-500 text-xs mt-1">{errorMessages.project}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">{t("messageOptional")}</label>
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
            {submitting ? tc("sending") : tc("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
