import { DashboardLayout } from '@layouts';
import React from 'react';

export const About = (): JSX.Element => (
  <React.Fragment>
    <h1>About</h1>
  </React.Fragment>
);

About.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
