import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/User/signUp";
import SignInPage from "./pages/User/singIn";
import HomePage from "./pages/userHome";
import Layout from "./components/layout";
import PrivacyPolicy from "./pages/miscellaneous/PrivacyPolicy";
import TermsOfService from "./pages/miscellaneous/TermsOfService";
import CookiePolicy from "./pages/miscellaneous/CookiePolicy";
import CommunityGuidelines from "./pages/miscellaneous/CommunityGuidelines";
import RefundPolicy from "./pages/miscellaneous/RefundPolicy";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="cookies" element={<CookiePolicy />} />
        <Route path="guidelines" element={<CommunityGuidelines />} />
        <Route path="refund" element={<RefundPolicy />} />
      </Route>
    </Routes>
  );
}
// sign up and sign in pages

export default App;
