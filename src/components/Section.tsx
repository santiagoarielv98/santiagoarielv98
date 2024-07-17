import { styled } from "@mui/material/styles";

const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default Section;
