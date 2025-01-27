"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [isAnimating, setIsAnimating] = useState(false); // Prevent button spam during animation

  // Variants for diagonal divider rotation
  const variants = {
    initial: {
      rotate: isLogin ? 0 : 180, // Initial rotation
    },
    animate: {
      rotate: isLogin ? 180 : 0, // Rotate clockwise or counter-clockwise
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Symmetrical clip paths for diagonal division
  const getClipPath = () => isLogin ? "polygon(30% 0, 80% 100%, 30% 100%, 0 100%)": "polygon(100% 0, 100% 30%, 100% 80%, 0 30%)";
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="relative h-[500px] w-[800px] overflow-hidden rounded-lg shadow-lg">
        {/* Diagonal Divider with inverse rotation */}
        <motion.div
          className="absolute inset-0 z-20 h-[150%] w-[150%] origin-center bg-purple-600"
          style={{ clipPath: getClipPath() }}
          variants={variants}
          initial="initial"
          animate="animate"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        />

        {/* Main Container */}
        <div className="absolute inset-0 flex">
          <AnimatePresence mode="wait">
            {/* Welcome Text - Perfect mirror positioning */}
            <motion.div
              key={isLogin ? "welcome-back" : "welcome"}
              className={`absolute flex h-full w-1/2 items-center justify-center p-12 ${
                isLogin ? "right-0" : "left-0"
              }`}
              initial={{ x: isLogin ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isLogin ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white">
                {isLogin ? "WELCOME BACK!" : "WELCOME!"}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Form Container - Mirror animation */}
          <motion.div
            className={`absolute flex h-full w-1/2 items-center justify-center bg-black p-12 ${
              isLogin ? "left-0" : "right-0"
            }`}
            initial={{ x: isLogin ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-xs">
              <h2 className="mb-8 text-2xl font-bold text-white">
                {isLogin ? "Login" : "Sign Up"}
              </h2>
              <form className="space-y-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded bg-gray-800 p-3 text-white"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded bg-gray-800 p-3 text-white"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded bg-gray-800 p-3 text-white"
                />
                <button className="w-full rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700">
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Symmetrical Toggle Links */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-6">
          <button
            className={`text-white hover:underline ${
              isLogin ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isLogin && !isAnimating && setIsLogin(true)}
            disabled={isAnimating || isLogin}
          >
            Sign In
          </button>
          <button
            className={`text-white hover:underline ${
              !isLogin ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => isLogin && !isAnimating && setIsLogin(false)}
            disabled={isAnimating || !isLogin}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;