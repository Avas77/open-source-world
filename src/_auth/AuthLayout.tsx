import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = true;
  return (
    <>
      {!isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col flex-1 justify-center items-center">
            <Outlet />
          </section>
          <aside className="hidden xl:block">
            <img src="/assets/images/side-img.svg" alt="thumnail image" />
          </aside>
        </>
      )}
    </>
  );
};

export default AuthLayout;
