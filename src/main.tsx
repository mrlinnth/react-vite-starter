import Router from '@/Router';
import '@/index.css';
import QueryProvider from '@/providers/QueryProvider';
import RecoilProvider from '@/providers/RecoilProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <RecoilProvider>
        <Router />
      </RecoilProvider>
    </QueryProvider>
  </React.StrictMode>
);
