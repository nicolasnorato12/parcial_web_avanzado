"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

type AddTaskFormProps = {
  onAdd: (title: string) => void;
};

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = title.trim();
    if (!value) return;
    onAdd(value);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={title}
        onChange={handleChange}
        placeholder="Enter Task"
        className="border p-2"
      />
      <button
        type="submit"
        disabled={!title.trim()}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Add
      </button>
    </form>
  );
}