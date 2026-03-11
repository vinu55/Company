import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = "pk_test_aW5ub2NlbnQtaG91bmQtNDYuY2xlcmsuYWNjb3VudHMuZGV2JA";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>
);