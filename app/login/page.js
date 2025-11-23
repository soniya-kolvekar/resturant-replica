"use client";
import { useState } from "react";
import { createAccount, resetEmail } from "../core/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    if (!email || !password) return alert("Enter email and password");

    let res = await createAccount(email, password);

    if (res?.user) {
      alert("Account created! Verification mail sent.");
      router.push("/SignIn");
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#111] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-black/40 backdrop-blur-md p-10 rounded-xl shadow-xl max-w-md w-full border border-white/10">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-md bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A0845F]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 rounded-md bg-[#1b1b1b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A0845F]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-[#A0845F] py-3 rounded-md font-semibold hover:bg-[#8D7654] transition"
        >
          Sign Up
        </button>

        <button
          onClick={() => {
            if (!email) return alert("Enter email first!");
            resetEmail(email);
            alert("Password reset email sent!");
          }}
          className="w-full mt-3 text-[#A0845F] hover:text-white transition"
        >
          Forgot Password?
        </button>

        <button
          onClick={() => router.push("/SignIn")}
          className="w-full mt-6 bg-white/10 border border-white/20 py-3 rounded-md hover:bg-white/20 transition"
        >
          Already have an account? Sign In
        </button>
      </div>
    </div>
  );
}
