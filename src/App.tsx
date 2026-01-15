import { useMemo } from 'react'
import './App.css'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './scenes/navbar/Navbar'
import Dashboard from './scenes/dashboard/Dashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminDashboard from './scenes/adminDashboard/AdminDashboard'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  //we are using react query
  const queryClient = new QueryClient();

  return (
  <QueryClientProvider client={queryClient}>
      <div className='rounded-lg p-10 mr-[-130px]'>
        {/* Also we need BrowserRouter for our paging routing */}
        <BrowserRouter>
          {/* here is our global theme provider for theme.ts */}
          <ThemeProvider theme={theme}>      
                {/* resets all default css and use mui css */}
                <CssBaseline />    
                <Navbar/>    
                <Box className='rounded-lg overflow-x-auto overflow-y' width="100%" height="100%" padding="2rem 5rem 4rem 2rem">           
                  <Routes>
                      <Route path="/" element={<Dashboard/>}/>
                      <Route path="/management" element={<AdminDashboard/>}/>
                  </Routes>
                  
                </Box>

          </ThemeProvider>
        </BrowserRouter>
      </div>
   </QueryClientProvider>
  );
}

export default App
