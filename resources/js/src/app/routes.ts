import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ScanDocumentPage } from "./pages/ScanDocumentPage";
import { TauHukumPage } from "./pages/TauHukumPage";
import { JusticeViralPage } from "./pages/JusticeViralPage";
import { HaloKumPage } from "./pages/HaloKumPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/scan-dokumen",
    Component: ScanDocumentPage,
  },
  {
    path: "/tau-hukum",
    Component: TauHukumPage,
  },
  {
    path: "/suara-keadilan",
    Component: JusticeViralPage,
  },
  {
    path: "/halokum",
    Component: HaloKumPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);
