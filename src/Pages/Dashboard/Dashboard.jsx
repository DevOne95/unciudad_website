import { Container, Grid, Box } from "@mui/material";

import MUIAppbarComponent from "../../Components/MUIAppbarComponent";

import Cards from "./Dashboard/Cards";

const Dashboard = () => (
  <>

    <MUIAppbarComponent />

    <Container>
      <Grid spacing={2} container>
        {/* dashboard cards */}
        <Cards />

        {/* tables or graphs */}

      </Grid>
    </Container>

  </>
);

export default Dashboard;
