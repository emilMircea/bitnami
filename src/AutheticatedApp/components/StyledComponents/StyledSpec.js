import styled from "@emotion/styled";

export const StyledSpec = styled.label(
  {
    border: "2px solid #5bf9ef",
    padding: "0.6rem 2.6rem",
    fontSize: "1rem",
    borderRadius: "2rem",
    fontWeight: "700",
    width: "100px",
    textAlign: "center",
  },
  (props) => ({
    border: props.color ? `2px solid ${props.color}` : "2px solid #5bf9ef",
  })
);
