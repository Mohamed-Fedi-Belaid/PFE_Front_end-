import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import { Box } from "@mui/material";

function Footer({ light }) {
  const { size } = typography;

  return (
    <Box position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <Box
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="center" // Centrage horizontal
          alignItems="center"
          px={1.5}
        >
          <Box
            textAlign="center" // Centrage horizontal du texte
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "black" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}, made with
            <MDBox fontSize={size.md} color={light ? "white" : "black"} mb={-0.5} mx={0.25}>
              <Icon color="error" fontSize="black">
                favorite
              </Icon>
            </MDBox>
            In 
            Tunisia.
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;