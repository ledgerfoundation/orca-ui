import React from 'react';
import { observer } from 'mobx-react-lite';
import Splash from '../components/Splash';
import Layout from '../components/Layout';

const Index = observer(() => (
  <Layout>
    <Splash />
  </Layout>
));

export default Index;
