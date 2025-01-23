import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";
import PageRoutes from "./routes";

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <PageRoutes />
    </AppTheme>
  );
}
