import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// FIX __dirname (CORRECT WAY)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// =====================
// All pages data
// =====================
const pages = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "We value your privacy and are committed to protecting your personal information.",
      "1. Information We Collect: We may collect your name, email address, and usage data when you use our website.",
      "2. How We Use Information: Your data is used to improve our services and provide better user experience.",
      "3. Data Protection: We use security measures to protect your personal data.",
      "4. Third Party Sharing: We do not sell or share your data with third parties without your consent.",
      "5. Cookies: We may use cookies to enhance your browsing experience."
    ]
  },

  terms: {
    title: "Terms of Use",
    content: [
      "By using this website, you agree to follow these terms and conditions.",
      "1. Website Usage: You agree not to misuse the website or engage in illegal activities.",
      "2. Account Responsibility: You are responsible for maintaining your account security.",
      "3. Content Ownership: All content on this website is owned by us.",
      "4. Changes to Terms: We can update these terms at any time without notice.",
      "5. Termination: We reserve the right to suspend accounts that violate our terms."
    ]
  },

  refund: {
    title: "Refund Policy",
    content: [
      "We offer refunds under certain conditions.",
      "1. Eligibility: Refund requests must be made within 7 days of purchase.",
      "2. Valid Reason: Refund is only applicable for valid issues.",
      "3. Process: Contact our support team with your order details.",
      "4. Non-refundable Items: Some services are non-refundable.",
      "5. Processing Time: Refunds are processed within 5-7 working days."
    ]
  }
};

// =====================
// API ROUTES
// =====================
app.get("/api/page/:type", (req, res) => {
  const pageType = req.params.type.toLowerCase();

  if (pages[pageType]) {
    res.json(pages[pageType]);
  } else {
    res.status(404).json({ message: "Page not found" });
  }
});

app.post("/api/page", (req, res) => {
  const { type, title, content } = req.body;

  if (!type || !title || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const key = type.toLowerCase();

  if (pages[key]) {
    return res.status(400).json({ message: "Page already exists" });
  }

  pages[key] = { title, content };
  res.json({ message: "Page created successfully", data: pages[key] });
});

// =====================
// Serve frontend (Vite build)
// =====================
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

// =====================
// Home route
// =====================
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// =====================
// Start server
// =====================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 