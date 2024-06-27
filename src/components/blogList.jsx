import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBlogData, storeBlogData } from "../utils/blogData";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import BlogCard from "./blogCard";

const BlogList = () => {
    const [blogData, setBlogData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const data = getBlogData();
        setBlogData(data);
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        const updatedData = blogData.filter((blog, index) => index !== id);
        setBlogData(updatedData);
        storeBlogData(updatedData);
    };

    return (
        <>
            <BlogListBgContainer>
                <Header>
                    <Title>Blog Posts</Title>
                    <CreateButton to="/create-blog">Create Blog</CreateButton>
                </Header>
                {blogData.length === 0 ? (
                    <EmptyStateContainer>
                        <EmptyImage
                            src="https://www.svgrepo.com/show/301479/empty.svg"
                            alt="No content available"
                        />
                        <Message>
                            No blog posts available. Check back later!
                        </Message>
                    </EmptyStateContainer>
                ) : (
                    <BlogListCardBgContainer>
                        {blogData.map(
                            ({ title, content, author, date }, index) => (
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
                            )
                        )}
                    </BlogListCardBgContainer>
                )}
            </BlogListBgContainer>
        </>
    );
};

export default BlogList;

// Styled components for BlogList
const BlogListBgContainer = styled.div`
    background-color: var(--theme-page-bg-color);
    color: var(--theme-primary-text-color);
    min-height: 100vh;
    padding: 2em;
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
