import React, { useState } from "react";

export const AddTestimonial = () => {
  const [form, setForm] = useState({
    author: "",
    position: "",
    description: "",
    imageUrl: "",
  });
  const [, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmptyField = Object.values(form).some((value) => value === "");
    if (isEmptyField) {
      setError("All fields are required.");
      return;
    }

    setIsSubmit(true);
    // Placeholder for form submission logic
    // e.g., send form data to the server

    alert("Form submitted successfully!");
    setIsSubmit(false);
  };

  return (
    <main className="mt-20 ml-20">
      <h1 className="w-fit mx-auto text-lg text-primary">Add Testimonial</h1>
      <span className="flex w-[120px] h-[2px] bg-[#e1e1e1] mx-auto mb-4">
        <em className="w-[60px] h-[2px] bg-primary mx-auto" />
      </span>
      <form className="w-[60%] h-auto p-10 bg-slate-50 shadow-lg mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-1">
            <input
              onChange={handleChange}
              value={form.author}
              type="text"
              name="author"
              className="p-3 my-3 bg-gray-100 rounded"
              placeholder="Author"
              required
            />
          </div>
          <div className="flex-1">
            <input
              onChange={handleChange}
              value={form.position}
              type="text"
              name="position"
              className="p-3 my-3 bg-gray-100 rounded"
              placeholder="Position"
              required
            />
          </div>
          <textarea
            name="description"
            rows={4}
            placeholder="Write description"
            onChange={handleChange}
            className="p-3 my-3 bg-gray-100 rounded w-full"
            value={form.description}
          />
          <label htmlFor="fileInput" className="cursor-pointer flex items-center justify-center border border-dashed border-[#1475cf] min-h-[120px] min-w-[120px] max-h-[120px] max-w-[120px]">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && setFile(e.target.files[0])}
            />
            <span className="text-[12px] text-center font-bold">(Choose file)</span>
          </label>
          {form.imageUrl && (
            <img
              src={form.imageUrl}
              alt="Uploaded"
              className="w-[120px] h-[120px] border border-blue-600 object-cover"
            />
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-400 py-2 px-20 rounded text-black mt-5"
          disabled={isSubmit}
        >
          {isSubmit ? "Submitting..." : "Create"}
        </button>
      </form>
    </main>
  );
};
