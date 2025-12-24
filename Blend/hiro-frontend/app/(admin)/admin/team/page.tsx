"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [form, setForm] = useState<TeamMember>({
    name: "",
    role: "",
    bio: "",
    photo: "",
    socials: {},
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const API_URL = "http://localhost:5000/api/team";

  // Fetch members
  const fetchMembers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.success) setMembers(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (file: File) => setPhotoFile(file);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0])
      setPhotoFile(e.dataTransfer.files[0]);
  };

  const openAddModal = () => {
    setForm({ name: "", role: "", bio: "", photo: "", socials: {} });
    setPhotoFile(null);
    setEditId(null);
    setErrorMsg("");
    setModalOpen(true);
  };

  const openEditModal = (member: TeamMember) => {
    setForm({ ...member });
    setPhotoFile(null);
    setEditId(member._id || null);
    setErrorMsg("");
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.role || !form.bio || (!photoFile && !editId)) {
      setErrorMsg(
        "Please fill in all required fields (Name, Role, Bio, Photo)"
      );
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("bio", form.bio);
    if (photoFile) formData.append("photo", photoFile);
    formData.append("socials", JSON.stringify(form.socials || {}));

    try {
      let data;
      if (editId) {
        const res = await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          body: formData,
        });
        data = await res.json();
        if (data.success) {
          setMembers((prev) =>
            prev.map((m) => (m._id === editId ? data.data : m))
          );
          setToastMsg("Member updated successfully!");
        }
      } else {
        const res = await fetch(API_URL, { method: "POST", body: formData });
        data = await res.json();
        if (data.success) {
          setMembers((prev) => [data.data, ...prev]);
          setToastMsg("Member added successfully!");
        }
      }

      setModalOpen(false);
      setErrorMsg("");
      setForm({ name: "", role: "", bio: "", photo: "", socials: {} });
      setPhotoFile(null);
      setEditId(null);
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to submit. Try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setMembers((prev) => prev.filter((m) => m._id !== id));
        setToastMsg("Member deleted successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="p-8 font-['Figtree'] bg-gray-50 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#001f3f]">
          Admin Team Management
        </h1>
        <button
          className="bg-[#001f3f] text-white px-5 py-2 rounded-md hover:bg-[#FF6600] transition"
          onClick={openAddModal}
        >
          Add Member
        </button>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-[#001f3f] text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm"
        >
          <div
            className="bg-white/90 backdrop-blur-md rounded-xl p-6 w-full max-w-lg shadow-lg"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <h2 className="text-xl font-semibold text-[#FF6600] mb-4">
              {editId ? "Edit Member" : "Add New Member"}
            </h2>
            {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={form.role}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border rounded-md"
            />
            <textarea
              name="bio"
              placeholder="Short Bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border rounded-md"
            />

            {/* Drag & Drop + File input */}
            <div
              className="mb-3 p-4 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer hover:border-[#001f3f] transition"
              onClick={() =>
                document.getElementById("photoInput")?.click()
              }
            >
              {photoFile ? `Selected: ${photoFile.name}` : "Drag & drop image here or click to browse"}
              <input
                type="file"
                accept="image/*"
                id="photoInput"
                onChange={(e) =>
                  e.target.files && handlePhotoChange(e.target.files[0])
                }
                className="hidden"
              />
            </div>

            {/* Optional Socials */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="LinkedIn (optional)"
                value={form.socials?.linkedin || ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    socials: { ...prev.socials, linkedin: e.target.value },
                  }))
                }
                className="w-full mb-2 px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Facebook (optional)"
                value={form.socials?.facebook || ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    socials: { ...prev.socials, facebook: e.target.value },
                  }))
                }
                className="w-full mb-2 px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Instagram (optional)"
                value={form.socials?.instagram || ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    socials: { ...prev.socials, instagram: e.target.value },
                  }))
                }
                className="w-full mb-2 px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="TikTok (optional)"
                value={form.socials?.tiktok || ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    socials: { ...prev.socials, tiktok: e.target.value },
                  }))
                }
                className="w-full mb-2 px-4 py-2 border rounded-md"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 rounded-md bg-[#001f3f] text-white hover:bg-[#FF6600] transition"
              >
                {editId ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {members.map((m) => (
            <motion.div
              key={m._id || Math.random()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={m.photo || "/logo.png"}
                  alt={m.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-bold text-[#001f3f]">{m.name || "Unnamed"}</h3>
              <p className="text-[#FF6600] font-semibold">{m.role || "No Role"}</p>
              <p className="text-gray-600 text-sm mb-2">{m.bio || "No Bio"}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => openEditModal(m)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(m._id!)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}