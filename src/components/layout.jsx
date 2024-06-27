import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import { Toaster } from "react-hot-toast";
import { useBlogContext } from "../context/blogContext";

const Layout = () => {
    const { isLightTheme } = useBlogContext();
    return (
        <>
            <NavBar />
            <Outlet />
            <Toaster
                position="top-center"
                containerStyle={{
                    top: 34,
                }}
                gutter={13}
                reverseOrder={false}
                toastOptions={{
                    duration: 2000,
                    style: {
                        fontSize: "0.8rem",
                        padding: "10px",
                        color: `${isLightTheme ? "black" : "white"}`,
                        background: `${isLightTheme ? "white" : "#1E1E1E"}`,
                    },
                }}
            />
        </>
    );
};

export default Layout;
