import React from 'react';
import { Grid } from '@material-ui/core';
import { useUserService } from '../../../contexts';
import UserTable from './UserTable';

function UserDashboard() {
  const [userState] = useUserService();
  const { me: userInfo } = userState;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={3}
    >
      <Grid item>User : {userInfo.email}</Grid>
      <Grid item container>
        <UserTable />
      </Grid>
    </Grid>
  );
}

export default UserDashboard;