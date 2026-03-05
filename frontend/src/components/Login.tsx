'use client'

import { useState } from "react"
import { Mail, Lock, User } from "lucide-react"
import { motion } from "framer-motion"
import { InputField } from "../shared/InputField"

type Mode = "login" | "register"

export default function Login() {

  const [mode, setMode] = useState<Mode>("login")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (mode === "login") {
      console.log("Login:", formData)
    } else {
      console.log("Register:", formData)
    }
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen px-6">

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-600/20 blur-[200px] -z-10" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full
          max-w-md
          bg-white/5
          backdrop-blur-md
          border
          border-white/10
          rounded-2xl
          px-8
          py-10
          text-center
        "
      >

        <h1 className="text-3xl font-semibold text-white">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          {mode === "login"
            ? "Login to continue"
            : "Sign up to start generating thumbnails"}
        </p>

        {mode === "register" && (
          <InputField
            icon={<User size={16} />}
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        )}

        <InputField
          icon={<Mail size={16} />}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <InputField
          icon={<Lock size={16} />}
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {mode === "login" && (
          <div className="text-left mt-4">
            <button
              type="button"
              className="text-sm text-pink-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        <button
          type="submit"
          className="
            mt-6
            w-full
            h-11
            rounded-full
            bg-linear-to-r
            from-pink-500
            to-purple-500
            text-white
            font-medium
            hover:opacity-90
            transition
          "
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        {/* Toggle */}
        <p
          onClick={() =>
            setMode(prev => (prev === "login" ? "register" : "login"))
          }
          className="text-slate-400 text-sm mt-5 cursor-pointer"
        >
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <span className="text-pink-400 hover:underline ml-1">
            {mode === "login" ? "Sign up" : "Login"}
          </span>
        </p>

      </motion.form>

    </div>
  )
}


