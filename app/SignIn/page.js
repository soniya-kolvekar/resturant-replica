"use client";
import { useState } from "react";
import { login, resetEmail } from "../core/auth";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) return alert("Enter details");

    let res = await login(email, password);
    if (res?.user) {
      alert("Login Successful!");
      router.push("/"); 
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#111] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-black/40 backdrop-blur-md p-10 rounded-xl shadow-xl max-w-md w-full border border-white/10">

        <h1 className="text-3xl font-bold text-center mb-6">
          Sign In
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
          onClick={handleLogin}
          className="w-full bg-[#A0845F] py-3 rounded-md font-semibold hover:bg-[#8D7654] transition"
        >
          Sign In
        </button>

        <button
          onClick={() => {
            resetEmail(email);
            alert("Reset email sent");
          }}
          className="w-full mt-3 text-[#A0845F] hover:text-white transition"
        >
          Forgot Password?
        </button>

        <button
          onClick={() => router.push("/login")}
          className="w-full mt-6 bg-white/10 border border-white/20 py-3 rounded-md hover:bg-white/20 transition"
        >
          Create New Account
        </button>
      </div>
    </div>
  );
}
