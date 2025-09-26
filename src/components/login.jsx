import React, { useState } from "react";
import "./login-page.css";

export default function LoginPage({ heroMain, onSubmit }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await onSubmit?.(email, pw);
    } catch (e) {
      setErr("Email or password is incorrect.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      {/* Left hero image */}
      <div
        className="login__hero"
        style={{ backgroundImage: `url('${heroMain || ""}')` }}
      >
        <div className="login__brand">
          <h1>Fundashon Transhende</h1>
          <p className="muted">Client Transport Management</p>
        </div>
      </div>

      {/* Right panel */}
      <aside className="login__panel">
        <form className="panel__card" onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <p className="muted">Welcome back. Please enter your details.</p>

          {err && (
            <div className="panel__error" role="alert">
              {err}
            </div>
          )}

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              autoComplete="current-password"
              required
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="••••••••"
            />
          </label>

          <button className="btn btn--primary" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>

          <div className="panel__links">
            <a href="/forgot">Forgot password?</a>
          </div>
        </form>
      </aside>
    </div>
  );
}
