
"use client";

import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8">

      <div className="w-full max-w-6xl min-h-[700px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl shadow-blue-950/40 border border-white/10">

        {/* Left Side */}
        <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-12 text-white">

          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"></div>

          <Link href="/" className="relative z-10 text-4xl font-extrabold tracking-tight">
            Vaangi<span className="text-blue-200">kkoo</span>
          </Link>

          <div className="relative z-10">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
              ✨ Your Shopping Journey Starts Here
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight">
              Discover More.
              <br />
              Shop Smarter.
              <br />
              Live Better.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
              Create your account and explore a world of amazing products.
              Enjoy a simple, convenient and enjoyable shopping experience.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-indigo-600 bg-orange-300 text-xl">😊</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-indigo-600 bg-pink-300 text-xl">😎</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-indigo-600 bg-green-300 text-xl">😁</div>
              </div>

              <p className="text-sm text-blue-100">
                Your next favourite product is waiting!
              </p>
            </div>
          </div>

          <p className="relative z-10 text-sm text-blue-200">
            © 2026 Vaangikkoo. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-12">

          <div className="w-full max-w-md">

            <div className="mb-8">
              <Link href="/" className="text-3xl font-extrabold tracking-tight text-gray-900 lg:hidden">
                vaangi<span className="text-blue-600">kkoo</span>
              </Link>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[3px] text-blue-600">
                Get Started
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Create Account
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Join Vaangikkoo and start shopping today.
              </p>
            </div>

            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                  <span className="text-lg text-gray-400">👤</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                  <span className="text-lg text-gray-400">✉️</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                  <span className="text-lg text-gray-400">🔒</span>
                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                  <span className="text-lg text-gray-400">🔐</span>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <p className="text-sm leading-6 text-gray-500">
                  I agree to the{" "}
                  <Link href="#" className="font-semibold text-blue-600 hover:underline">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="font-semibold text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
              >
                Create My Account
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>

            </form>

            {/* Login */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-blue-600 hover:text-indigo-700">
                  Sign In
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
