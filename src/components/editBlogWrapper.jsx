import { useParams } from "react-router-dom";
import { getBlogData } from "../utils/blogData";
import CreateBlog from "./createBlog";

const EditBlogWrapper = () => {
    const { id } = useParams();
    const blogData = getBlogData();
    const blogToEdit = blogData[id];

    if (!blogToEdit) {
        // Handle the case where the blog is not found
        return <div>Blog not found</div>;
    }

    return (
        <CreateBlog
            initialData={blogToEdit}
            isEditMode={true}
            blogId={parseInt(id)}
        />
    );
};

export default EditBlogWrapper;
