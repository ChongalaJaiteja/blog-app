import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBlogData } from "../utils/blogData";
import toast from "react-hot-toast";

const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const data = getBlogData();
        const blog = data[id];
        if (blog) {
            setBlog(blog);
        } else {
            toast.error("Blog not found");
            navigate("/");
        }
    }, [id, navigate]);

    if (!blog) {
        return null;
    }

    return (
        <BlogPostContainer>
            <Title>{blog?.title}</Title>
            <Subheader>
                <Author>By {blog?.author}</Author>
                <Date>{blog?.date}</Date>
            </Subheader>
            <Content>{blog?.content}</Content>
            <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
        </BlogPostContainer>
    );
};

export default BlogPost;

// Styled components
const BlogPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--total-page-pd-sm);
    background-color: var(--theme-page-bg-color);
    color: var(--theme-primary-text-color);
    margin: 0 auto;
    min-height: 100vh;
`;

const Title = styled.h1`
    color: var(--theme-primary-text-color);
    margin-bottom: 0.5em;
    word-wrap: break-word;
    font-size: 2.5em;
    line-height: 1.2;
    width: 100%;
    text-transform: capitalize;
`;

const Subheader = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1em;
    font-size: 0.875em;
    color: var(--theme-secondary-text-color);
    margin-bottom: 1.5em;
`;

const Author = styled.span`
    font-weight: bold;
`;

const Date = styled.span`
    font-style: italic;
`;

const Content = styled.div`
    color: var(--theme-primary-text-color);
    font-size: 1.1em;
    line-height: 1.6;
    white-space: pre-wrap;
    text-align: justify;
    width: 100%;
    margin-bottom: 2em;
`;

const BackButton = styled.button`
    padding: 0.75em 1em;
    border: 1px solid var(--theme-primary-color);
    background-color: var(--theme-primary-color);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    align-self: center;

    &:hover {
        background-color: var(--theme-primary-color-hover);
        border-color: var(--theme-primary-color-hover);
    }
`;
