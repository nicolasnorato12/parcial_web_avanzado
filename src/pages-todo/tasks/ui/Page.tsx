import { TaskList } from "@/widgets/task-list";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">My Tasks</h1>
      <TaskList />
    </main>
  );
}