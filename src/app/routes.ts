import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ScanDocumentPage } from "./pages/ScanDocumentPage";
import { TauHukumPage } from "./pages/TauHukumPage";
import { JusticeViralPage } from "./pages/JusticeViralPage";
import { HaloKumPage } from "./pages/HaloKumPage";

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
    path: "/justice-viral",
    Component: JusticeViralPage,
  },
  {
    path: "/halokum",
    Component: HaloKumPage,
  },
]);
