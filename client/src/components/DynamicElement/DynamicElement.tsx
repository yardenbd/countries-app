import { ButtonContainer, StyledImage } from "./style";

interface IElementToRenderProps {
  tableHeader: string;
  content: string | number;
  onEdit: () => void;
  onDelete: () => void;
}

export const DynamicElement: React.FC<IElementToRenderProps> = ({
  tableHeader,
  content,
  onEdit,
  onDelete,
}) => {
  switch (tableHeader) {
    case "action":
      return (
        <ButtonContainer>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onEdit}>Edit</button>
        </ButtonContainer>
      );
    case "flag":
      if (typeof content === "string") {
        return <StyledImage className="image" src={content} alt="img" />;
      }
      return null;
    default:
      return <span> {content}</span>;
  }
};
