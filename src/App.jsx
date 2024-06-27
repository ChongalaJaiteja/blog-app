import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { BlogProvider } from "./context/blogContext";
import { ThemeContextProvider } from "./context/themeContext";
import { GlobalStyles } from "./globalStyles";
import CreateBlog from "./components/createBlog";
import EditBlogWrapper from "./components/editBlogWrapper";

const App = () => {
    return (
        <BlogProvider>
            <ThemeContextProvider>
                <GlobalStyles />
                <BrowserRouter>
                    <Routes basename="/blog-app">
                        <Route path="/blog-app" element={<Layout />}>
                            <Route index element={<BlogList />} />
                            <Route path="blog/:id" element={<BlogPost />} />
                            <Route
                                path="create-blog"
                                element={<CreateBlog />}
                            />
                            <Route
                                path="edit/:id"
                                element={<EditBlogWrapper />}
                            />
                        </Route>
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>
        </BlogProvider>
    );
};

export default App;
