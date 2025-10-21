import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-xl w-full bg-gray-900/70 rounded-2xl shadow-lg border border-gray-800 p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-400">
          1️⃣ Annie X Hobo 1️⃣
        </h1>
        <p className="text-gray-400 mb-8">
          Welcome to your Discord Bot Control Panel.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <DashboardButton command="Ban User" description="Ban a user from the server" />
          <DashboardButton command="Kick User" description="Kick a user from the server" />
          <DashboardButton command="Nickname" description="Set or change a user nickname" />
          <DashboardButton command="Give Role" description="Assign a role to a user" />
          <DashboardButton command="Remove Role" description="Remove a role from a user" />
          <DashboardButton command="Role List" description="DM list of available roles" />
          <DashboardButton command="Shutdown" description="Shut down the bot (Owner only)" />
        </div>

        <footer className="mt-8 text-gray-500 text-sm">
          Connected Guild: <span className="text-indigo-400">1425572547960770780</span><br />
          Bot ID: <span className="text-indigo-400">1428573914044436581</span>
        </footer>
      </div>
    </main>
  );
}

function DashboardButton({ command, description }) {
  return (
    <button
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition-colors duration-200"
      onClick={() => alert(`${command} clicked — connect this to your bot API later!`)}
    >
      <span className="font-semibold">{command}</span>
      <p className="text-sm text-gray-300">{description}</p>
    </button>
  );
}
