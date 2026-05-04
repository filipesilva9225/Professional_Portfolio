import { Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton.tsx";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  height: "100vh",
}));
const StyledImage = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
}));
const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImage src={Avatar} />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h1"
                color="secondary.contrastText"
                align="center"
              >
                Filipe Silva
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h3"
                align="center"
              >
                Engenheiro De Software
              </Typography>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton>
                    <DownloadIcon />
                    Download CV
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton>
                    <EmailIcon />
                    Contate-me
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
