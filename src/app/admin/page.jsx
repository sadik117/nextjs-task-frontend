import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for handling events",
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          <Link href="/admin/add-event" className="hover:bg-gray-700 p-2 rounded">
            ➕ Add Event
          </Link>
          <Link href="/" className="hover:bg-gray-700 p-2 rounded">
            ⬅ Back to Home
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
        <p className="text-gray-600">
          Use the sidebar to manage events and update your site.
        </p>
      </main>
    </div>
  );
}
