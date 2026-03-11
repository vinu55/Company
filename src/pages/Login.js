import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  // horizontal center
        alignItems: "center",      // vertical center
        height: "100vh",           // full viewport height
        backgroundColor: "#f5f5f5" // optional light background
      }}
    >
      <div style={{ minWidth: "320px", width: "100%", maxWidth: "400px" }}>
        <SignIn />
      </div>
    </div>
  );
}