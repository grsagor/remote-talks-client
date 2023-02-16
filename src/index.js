import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Corben&family=EB+Garamond&family=Lato&family=Poppins:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Arvo&family=Corben&family=EB+Garamond&family=Lato&family=Noto+Serif:ital@1&family=Poppins:wght@500&display=swap');
</style>


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
