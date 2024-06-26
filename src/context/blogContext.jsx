// Import necessary modules from React
import { createContext, useContext, useState } from "react";

// Create a WikipediaContext using createContext to provide Wikipedia-related data to components
export const blogContext = createContext();

// Create a custom hook 'useblogContext' to easily access the blog context in components
export const useBlogContext = () => useContext(blogContext);

// Define the blogProvider component responsible for managing blog-related state and providing it to the app
export const BlogProvider = ({ children }) => {
    // Initialize a state variable 'isLightTheme' using useState to track the current light or dark theme
    const [isLightTheme, setIsLightTheme] = useState(() => {
        try {
            // Attempt to retrieve the 'lightMode' value from local storage and parse it as JSON
            const storedValue = JSON.parse(localStorage.getItem("lightMode"));
            // If the value is not null, use the stored value; otherwise, default to 'false'
            return storedValue !== null ? storedValue : false;
        } catch (error) {
            // If there is an error while parsing or retrieving the value, default to 'true'
            return true;
        }
    });
    // Define a function 'toggleTheme' to switch between light and dark themes
    const toggleTheme = () => {
        localStorage.setItem("lightMode", !isLightTheme);
        setIsLightTheme((prevState) => !prevState);
    };

    // Provide blog-related data, including the current theme and toggle function, to components
    return (
        <blogContext.Provider
            value={{
                isLightTheme,
                toggleTheme,
            }}
        >
            {children}
        </blogContext.Provider>
    );
};
