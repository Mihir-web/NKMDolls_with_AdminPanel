import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import Images from "./components/Images";
import HeroSection from "./components/HeroSection";
import ZigzagDivider from "./components/ZigzagDivider";
import Accessories from "./components/Accessories";
import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer/Footer";
import logoImage from "./assets/NKM Dolls logo dated Aug.28.23.png";
import DealsOfDay from "./components/DealsOfDay";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductComponent from "./components/ProductComponent";
import TutorialsGrid from "./components/grid";
import Testimonial from "./components/Testimonial";
import ProductPage from "./pages/ProductPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import OTPVerificationPage from "./pages/OTPVarificationPage";
import FAQ from "./components/FAQ";
import OTPVerificationPageForSignup from "./pages/Emailverification";
import LogoutPage from "./pages/LogoutPage";
import AdminRoutes from "./admin/App"; // Import Admin Routes

const App: React.FC = () => {
  const location = useLocation();

  // Define routes where the header and footer should not appear
  const routesWithoutHeaderFooter = [
    "/login",
    "/signup",
    "/forget",
    "/otp",
    "/otp-verify-signup",
  ];

  // Check if the current route is part of the admin panel
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Check if the current route should hide header/footer
  const hideHeaderFooter = routesWithoutHeaderFooter.includes(location.pathname);

  return (
    <>
      {/* Render admin panel if URL contains '/admin' */}
      {isAdminRoute ? (
        <AdminRoutes />
      ) : (
        <>
          {!hideHeaderFooter && <Header />}

          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/forget" element={<ForgetPasswordPage />} />
            <Route path="/otp" element={<OTPVerificationPage />} />
            <Route path="/otp-verify-signup" element={<OTPVerificationPageForSignup />} />
            <Route path="/logout" element={<LogoutPage />} />

            {/* Home route */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ZigzagDivider />
                  <DealsOfDay />
                  <ZigzagDivider />
                  <ProductComponent />
                  <TutorialsGrid />
                  <BestSellers />
                  <Accessories />
                  <Testimonial />
                  <Images />
                  <FAQ />
                </>
              }
            />
          </Routes>

          {!hideHeaderFooter && (
            <Footer
              logoSrc={logoImage}
              description="Vel quam arcu semper augue; curae vulputate montes eros. Amet mus dolor sagittis; augue convallis."
              copyrightYear={2024}
              companyName="NKM DOLLS"
            />
          )}
        </>
      )}
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
