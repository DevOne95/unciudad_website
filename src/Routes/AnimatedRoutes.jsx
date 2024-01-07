import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import useThemeHooks from "../Hooks/ThemeHooks";
import useUserHooks from "../Hooks/UserHooks";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Layout from "../Layout/index";

function ProtectedRoute(user) {
  return user !== null ? <Outlet /> : <Navigate to="signin" replace={true} />;
}

const AnimatedRoutes = () => {
  const { user } = useUserHooks();
  const { getRoutes } = useThemeHooks();

  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} />}>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                {getRoutes(user.role).map((value) => (
                  <Route
                    key={value.id}
                    path={value.path}
                    element={value.element}
                  />
                ))}
              </Routes>
            </Layout>
          }
        />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default AnimatedRoutes;
