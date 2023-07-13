import Header from "./Header";
import {Outlet} from "react-router-dom";
// Outlet component is used to render child routes within a parent route.
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}