import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import { ThemeProvider } from "./components/theme-provider";
import { appRoutes } from "./routes";
import Login from "@/pages/auth/Login";

const renderRoutes = () =>
    appRoutes.map((section) =>
        section.children?.map((sub) => (
            <Route
                key={`${section.path}/${sub.path}`}
                path={`${section.path}/${sub.path}`}
                element={sub.element}
            />
        ))
    );

export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<DashboardLayout />}>
                        <Route
                            index
                            element={<Navigate to="/dashboard/admin" replace />}
                        />
                        {renderRoutes()}
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
