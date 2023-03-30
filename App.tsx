import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {RootStack} from './src/navigation/RootStack';

interface Props {
  children: JSX.Element;
}

const queryClient = new QueryClient();

const AppState = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const App = (): JSX.Element => {
  return (
    <AppState>
      <RootStack />
    </AppState>
  );
};

export default App;
