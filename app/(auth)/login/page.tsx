'use client'

import {Button} from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // handle login using auth.ts from lib
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const { data, error } = await signIn(username, password);
            if (error) {
                setError(error.message);
            } else {
                toast.success("Login successful!");
                // Redirect to dashboard or home page after successful login
                router.push("/admin/dashboard");
                router.refresh(); // Refresh the page to update the authentication state if necessary
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <Input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <Input
                    type="password"
                    className="w-full px-3 py-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button variant="primary" className="w-full" onClick={handleSubmit}>
                Login
            </Button>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            <Toaster position="top-right" />
        </div>
    </div>
  )
}

export default LoginPage;