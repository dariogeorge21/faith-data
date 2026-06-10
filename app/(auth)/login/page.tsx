'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast, Toaster } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, User } from "lucide-react";

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      toast.success("Logged in successfully!");
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">

        {/* Background Blur Effects */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100/30 blur-3xl" />

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                <Lock className="h-8 w-8 text-indigo-600" />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome Back
              </h1>

              <p className="mt-2 text-gray-500">
                Sign in to access your admin dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Username
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12 rounded-xl border-gray-300 pl-11 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-xl border-gray-300 pl-11 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Button */}
              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-indigo-600 font-medium text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 border-t border-gray-100 pt-6 text-center">
              <p className="text-sm text-gray-500">
                Secure Admin Portal
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    </>
  );
};

export default LoginPage;