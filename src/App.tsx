import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import { Home } from "./_root/pages";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SigninForm />} index />
          <Route path="sign-up" element={<SignupForm />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
