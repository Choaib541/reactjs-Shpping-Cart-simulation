import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const StyledPcard = styled(Paper)({
    img: {
        maxWidth: "100%",
        width: "100%",
        objectFit: "cover",
        height: "200px",
    },
});

export default StyledPcard;
