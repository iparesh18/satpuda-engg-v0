import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, User, Lock, Eye, EyeOff, Loader2, LogIn, Sparkles, AlertCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Button } from "../../ui/button.jsx";
import { loginAdmin } from "../services/admin-auth.js";

export function AdminLogin({ onSuccess }) {
  const apiBaseUrl = import.meta.env.VITE_API_URL || "";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    if (!username.trim() || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await loginAdmin(apiBaseUrl, username.trim(), password);
      toast.success("Welcome back, Admin.");
      onSuccess?.();
    } catch (err) {
      const message = err?.message || "Login failed. Please try again.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(2,21,69,0.10),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(214,11,11,0.08),transparent_34%),linear-gradient(180deg,#f8fafc_0%,#eef2f9_100%)] px-4 py-10 text-slate-900 [&_button]:cursor-pointer">
      <Toaster richColors theme="light" position="top-right" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-[#021545]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#d60b0b]/10 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          {/* Header band */}
          <div className="relative bg-[#021545] px-8 py-8 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,11,11,0.35),transparent_55%)]" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  Satpuda Admin
                </p>
                <h1 className="mt-1 text-2xl font-bold leading-tight">Superpower Panel</h1>
              </div>
            </div>
            <p className="relative mt-4 text-sm text-white/70">
              Sign in to access the admin dashboard and manage submissions.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 px-8 py-8">
            <div className="space-y-2">
              <label htmlFor="admin-username" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Username
              </label>
              <div className="group relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#021545]" />
                <input
                  id="admin-username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="satpuda@admin"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#021545] focus:ring-4 focus:ring-[#021545]/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="admin-password" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Password
              </label>
              <div className="group relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#021545]" />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-11 text-sm text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-[#021545] focus:ring-4 focus:ring-[#021545]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#021545]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error ? (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 rounded-xl border border-[#d60b0b]/20 bg-[#d60b0b]/5 px-3.5 py-2.5 text-sm text-[#d60b0b]"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            ) : null}

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-[#021545] text-base font-semibold text-white shadow-lg shadow-[#021545]/20 transition-all hover:bg-[#021545]/90 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  Sign in
                </>
              )}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Restricted area • Authorized personnel only
        </p>
      </motion.div>
    </div>
  );
}
