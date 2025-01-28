"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const variants = {
    initial: { rotate: isLogin ? 0 : 180 }, 
    animate: {
      rotate: isLogin ? 180 : 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="relative h-[500px] w-[800px] overflow-hidden rounded-lg shadow-lg">
        {/* Diagonal Divider */}
        <motion.div
          className="absolute inset-0 z-20 h-[150%] w-[150%] origin-center bg-purple-600"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
          variants={variants}
          initial="initial"
          animate="animate"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        />

        {/* Main Container */}
        <div className="absolute inset-0 flex">
          <AnimatePresence mode="wait">
            {/* Welcome Text */}
            <motion.div
              key={isLogin ? "welcome" : "welcome-back"}
              className={`absolute flex h-full w-1/2 items-center justify-center p-12 ${
                isLogin ? "right-0" : "left-0"
              }`}
              initial={{ x: isLogin ? "-100%" : "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isLogin ? "100%" : "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white">
                {isLogin ? "WELCOME!" : "WELCOME BACK!"}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Form Container */}
          <motion.div
            className={`absolute flex h-full w-1/2 items-center justify-center bg-black p-12 ${
              isLogin ? "left-0" : "right-0"
            }`}
            initial={{ x: isLogin ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: isLogin ? "-100%" : "100%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-xs">
              {isLogin && (
                <h2 className="mb-8 text-2xl font-bold text-white">Login</h2>
              )}
              <form className="space-y-4">
                {isLogin && (
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded bg-gray-800 p-3 text-white"
                  />
                )}
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

        {/* Toggle Link */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
          <button
            className="text-white hover:underline"
            onClick={() => !isAnimating && setIsLogin(!isLogin)}
            disabled={isAnimating}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;