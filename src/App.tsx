import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { PermissionsProvider } from './contexts/PermissionsContext';
import { AuditProvider } from './contexts/AuditContext';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <PermissionsProvider>
            <AuditProvider>
              <AppRoutes />
            </AuditProvider>
          </PermissionsProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
