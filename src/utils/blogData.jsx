export const getBlogData = () => {
    return JSON.parse(localStorage.getItem("blogData")) || [];
};

export const storeBlogData = (data) => {
    localStorage.setItem("blogData", JSON.stringify(data));
};
