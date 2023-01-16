import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { getUser } from "./apiCalls";
import { Dashboard, Layout, Member, News } from "./pages";
import { themeSettings } from "./theme";
function App() {
  const { mode } = useSelector((state) => state.theme);
  const { userId, userData } = useSelector((state) => state.user);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const dispatch = useDispatch();

  if (!userData) {
    getUser(dispatch, userId);
  }
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/members" element={<Member />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
