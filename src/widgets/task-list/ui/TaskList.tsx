"use client";

import { useState } from "react";
import { Task } from "@/entities/task";
import { AddTaskForm } from "@/features/add-task";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        done: false,
      },
    ]);
  };

  return (
    <div>
      {/* Componente de formulario para añadir tareas */}
      <AddTaskForm onAdd={addTask} />
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 bg-gray-100 rounded">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}