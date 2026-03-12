import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5"
      }}
    >
      <div style={{ minWidth: "320px", width: "100%", maxWidth: "400px" }}>
        <SignIn />
      </div>
    </div>
  );
}