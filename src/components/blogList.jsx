import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBlogData, storeBlogData } from "../utils/blogData";
import { Link, useNavigate } from "react-router-dom";
import BlogCard from "./blogCard";
import { useBlogContext } from "../context/blogContext";
import toast from "react-hot-toast";

const BlogList = () => {
    const [blogData, setBlogData] = useState([]);
    const navigate = useNavigate();
    const { isLightTheme } = useBlogContext();

    useEffect(() => {
        const data = getBlogData();
        setBlogData(data);
    }, []);

    const handleEdit = (id) => {
        navigate(`edit/${id}`);
    };

    const handleDelete = (id) => {
        const updatedData = blogData.filter((blog, index) => index !== id);
        setBlogData(updatedData);
        storeBlogData(updatedData);
        toast.success("Blog deleted successfully!");
    };

    return (
        <BlogListBgContainer>
            <Header>
                <Title>Blog Posts</Title>
                <CreateButton to="create-blog">Create Blog</CreateButton>
            </Header>

            {blogData.length === 0 ? (
                <EmptyStateContainer>
                    <EmptyImage
                        src="https://img.freepik.com/free-vector/blog-articles-abstract-concept-illustration_335657-4934.jpg?t=st=1719454876~exp=1719458476~hmac=21ba36c322ac59c93f759c033b220051aa052b65e903d6636004a7796e8ba19c&w=740"
                        alt="No content available"
                    />
                    <Message>No blog posts available.</Message>
                </EmptyStateContainer>
            ) : (
                <BlogListCardBgContainer>
                    {blogData.map(({ title, content, author, date }, index) => (
                        <BlogCard
                            key={index}
                            id={index}
                            title={title}
                            content={content}
                            author={author}
                            date={date}
                            onEdit={() => handleEdit(index)}
                            onDelete={() => handleDelete(index)}
                        />
                    ))}
                </BlogListCardBgContainer>
            )}
            {/* Floating Create Blog Button */}
            <CreateButtonFloating to="create-blog">
                Create Blog
            </CreateButtonFloating>
        </BlogListBgContainer>
    );
};

export default BlogList;

// Styled components for BlogList
const BlogListBgContainer = styled.div`
    background-color: var(--theme-page-bg-color);
    color: var(--theme-primary-text-color);
    min-height: 100vh;
    padding: 2em;
    position: relative;
    padding-bottom: 5em;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
`;

const Title = styled.h1`
    font-size: 1.8em;
    color: var(--theme-header-text-color);
    margin: 0;
`;

const BlogListCardBgContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5em;
    width: 100%;
    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1700px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const EmptyImage = styled.img`
    max-width: 300px;
    width: 100%;
    margin-bottom: 1em;
`;

const Message = styled.p`
    font-size: 1.2em;
    color: var(--theme-primary-text-color);
`;

// Floating Create Button styled component
const CreateButtonFloating = styled(Link)`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    padding: 0.8em 1.5em;
    background-color: var(--theme-primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--theme-secondary-color);
    }

    @media (min-width: 600px) {
        display: none;
    }
`;

const CreateButton = styled(Link)`
    padding: 0.8em 1.5em;
    background-color: var(--theme-primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: var(--theme-secondary-color);
    }
    @media (max-width: 600px) {
        display: none;
    }
`;
