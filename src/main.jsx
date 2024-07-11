import ReactDOM from "react-dom/client";

import "@radix-ui/themes/styles.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";

import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme accentColor="red" grayColor="sage" radius="small" appearance="dark">
    <RouterProvider router={routes} />
  </Theme>
);
