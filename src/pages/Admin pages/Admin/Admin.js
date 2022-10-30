// import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../../Components/DashboardLayout';

// import { Budget } from '../components/dashboard/budget';
// import { LatestOrders } from '../components/dashboard/latest-orders';
// import { LatestProducts } from '../components/dashboard/latest-products';
// import { Sales } from '../components/dashboard/sales';
// import { TasksProgress } from '../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';
// import { TotalProfit } from '../components/dashboard/total-profit';
// import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
// import { DashboardLayout } from '../components/dashboard-layout';

const Admin = () => (

  //  <BrowserRouter>
  <>
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
          // width=100
        }}
      >
        <Container maxWidth={false} >
          {/* <Grid
            container
            spacing={3}
            direction="row"
  justifyContent="center"
  alignItems="center"
          >
            <Grid item lg={8} md={8} sm={12} xs={12}> */}
              {/* <Item>xs=6 md=4</Item> */}
            <Outlet />
            {/* </Grid> */}

          {/* </Grid> */}
        </Container>
      </Box>

    </DashboardLayout>
  </>
  //  </BrowserRouter>

);

// Page.getLayout = (page) => (
//   console.log(page)
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Admin;