"use client";

import { HeartHandshake } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex items-center justify-center px-4">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative w-full max-w-lg">
        <div className="backdrop-blur-lg bg-white/80 border border-white/30 shadow-2xl rounded-3xl p-10 text-center">
          {/* Logo / Icon */}
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <HeartHandshake className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Jesus Youth Pala
          </h1>

          <h2 className="text-lg font-medium text-indigo-600 mb-6">
            Intercession Data Portal
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Welcome to the official intercession management platform for
            <span className="font-semibold text-gray-800">
              {" "}
              Jesus Youth Pala
            </span>
            . Access prayer requests, manage intercession records, and
            collaborate effectively with your ministry team.
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200" />

          {/* CTA */}
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              Login to Dashboard
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-500 mt-6">
            Secure access for administrators and coordinators
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;