import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/LoginImage.svg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout>
      <div className="">
      <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={12}>
          {/* First Card */}
          <Card sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={bgImage} alt="ImageDigidis" style={{ maxWidth: '100%', height: 'auto' }} />
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* Second Card */}
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              p={2}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Sign in
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput type="email" label="Email" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="password" label="Password" fullWidth />
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={-1}>
                  <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    onClick={handleSetRememberMe}
                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                  >
                    &nbsp;&nbsp;Remember me
                  </MDTypography>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth>
                    Sign in
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
      </div>

     
    </BasicLayout>
  );
}

export default Basic;