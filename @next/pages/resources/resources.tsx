import { DashboardLayout } from '@layouts';
import React from 'react';

export const Resources = (): JSX.Element => (
  <React.Fragment>
    <h1>Resources</h1>
  </React.Fragment>
);

Resources.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
