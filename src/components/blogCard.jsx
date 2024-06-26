import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// BlogCard component
const BlogCard = ({ id, title, content, author, date, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/blog/${id}`);
    };

    return (
        <CardContainer onClick={handleCardClick}>
            <CardHeader>
                <Title>{title}</Title>
                <Actions>
                    <EditButton onClick={onEdit}>
                        <FaEdit />
                    </EditButton>
                    <DeleteButton onClick={onDelete}>
                        <FaTrash />
                    </DeleteButton>
                </Actions>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
                <Author>{author}</Author>
                <Date>{date}</Date>
            </CardFooter>
        </CardContainer>
    );
};

export default BlogCard;

// Styled components for BlogCard
const CardContainer = styled.div`
    background-color: var(--theme-container-bg-color);
    border: 1px solid var(--theme-border-color);
    border-radius: 10px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    padding: 1.2em 1.1em;
    overflow: hidden; /* Ensure content does not overflow */
    text-overflow: ellipsis; /* Display ellipsis for overflowed text */
    white-space: nowrap; /* Prevent text from wrapping */

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
`;

const Title = styled.h2`
    font-size: 1.5em;
    color: var(--theme-header-text-color);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 60px);
`;

const Actions = styled.div`
    display: flex;
    gap: 0.5em;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    color: var(--theme-primary-text-color);
    cursor: pointer;
    font-size: 1.2em;
    transition: color 0.3s ease;

    &:hover {
        color: var(--theme-secondary-color);
    }
`;

const EditButton = styled(ActionButton)``;

const DeleteButton = styled(ActionButton)`
    color: red;
    &:hover {
        color: darkred;
    }
`;

const CardContent = styled.p`
    font-size: 1em;
    color: var(--theme-primary-text-color);
    margin: 0 0 1em;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875em;
    color: var(--theme-second-text-color);
`;

const Author = styled.span`
    font-weight: bold;
`;

const Date = styled.span`
    font-style: italic;
`;
