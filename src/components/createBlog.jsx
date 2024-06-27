import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getBlogData, storeBlogData } from "../utils/blogData";

const INITIAL_FORM_DATA = {
    title: "",
    content: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
};

const CreateBlog = ({
    initialData = INITIAL_FORM_DATA,
    isEditMode = false,
    blogId,
}) => {
    const maxTitleLength = 100;
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (isEditMode) {
            setFormData(initialData);
        }
    }, [initialData, isEditMode]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const blogData = getBlogData();
            if (isEditMode) {
                // Update the existing blog
                const updatedBlogs = blogData.map((blog, index) =>
                    index === blogId ? formData : blog
                );
                storeBlogData(updatedBlogs);
                toast.success("Blog updated successfully!");
            } else {
                // Create a new blog
                blogData.push(formData);
                storeBlogData(blogData);
                toast.success("Blog created successfully!");
            }
            navigate("/");
        } else {
            toast.error("Please fill in all required fields");
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Title is required *";
            valid = false;
        }

        if (!formData.content.trim()) {
            newErrors.content = "Content is required *";
            valid = false;
        }

        if (!formData.author.trim()) {
            newErrors.author = "Author is required *";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleTitleChange = (e) => {
        const { value } = e.target;
        if (value.length <= maxTitleLength) {
            setFormData({ ...formData, title: value });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (value.trim() === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${
                    name.charAt(0).toUpperCase() + name.slice(1)
                } is required *`,
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };

    const currentTitleLength = formData.title.length;

    const titleCharacterCount = `${currentTitleLength}/${maxTitleLength}`;

    return (
        <CreateBlogContainer>
            <CreateBlogInnerContainer>
                <Title>{isEditMode ? "Edit Blog" : "Create a New Blog"}</Title>
                <BlogFormContainer onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor="title">Title</label>
                        <Input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleTitleChange}
                            onBlur={handleBlur}
                            maxLength={maxTitleLength}
                            error={errors.title}
                            placeholder="Enter blog title"
                        />
                        <CharacterCount
                            error={currentTitleLength >= maxTitleLength}
                        >
                            max char {titleCharacterCount}
                        </CharacterCount>
                        {errors.title && (
                            <ErrorMessage>{errors.title}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="content">Content</label>
                        <Textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            rows={10}
                            placeholder="Enter blog content"
                        />
                        {errors.content && (
                            <ErrorMessage>{errors.content}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="author">Author</label>
                        <Input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="Enter author name"
                        />
                        {errors.author && (
                            <ErrorMessage>{errors.author}</ErrorMessage>
                        )}
                    </FormGroup>
                    <Button type="submit">
                        {isEditMode ? "Update Blog" : "Create Blog"}
                    </Button>
                </BlogFormContainer>
            </CreateBlogInnerContainer>
        </CreateBlogContainer>
    );
};

export default CreateBlog;

// Styled components remain the same...
// (You can copy them from your existing CreateBlog component)

// Styled components
const CreateBlogContainer = styled.div`
    margin: 0 auto;
    padding: 2em;
    background-color: var(--theme-page-bg-color);
    color: var(--theme-primary-text-color);
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

const CreateBlogInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const BlogFormContainer = styled.form`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 1.8em;
    margin-bottom: 1em;
    text-align: center;
`;

const FormGroup = styled.div`
    margin-bottom: 1.5em;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
    border-radius: 4px;
    outline: none;
    margin-top: 0.5em;
    background-color: var(--theme-input-bg-color);
    color: var(--theme-input-text-color);
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
    border-radius: 4px;
    resize: none;
    outline: none;
    margin-top: 0.5em;
    background-color: var(--theme-input-bg-color);
    color: var(--theme-input-text-color);
`;

const Button = styled.button`
    padding: 0.8em 1.5em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    align-self: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.875em;
    margin-top: 0.5em;
`;

const CharacterCount = styled.span`
    font-size: 0.875em;
    color: ${(props) => (props.error ? "red" : "")};
    margin-top: 0.5em;
    display: block;
    text-transform: capitalize;
`;
