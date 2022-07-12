import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Colaborators from '../pages/Colaborators';
import Companies from '../pages/Companies';
import Services from '../pages/Services';
import SignIn from '../pages/SignIn';
import FormServices from '../pages/FormServices';
import PrivateWrapper from './PrivateWrapper';
import FormCompanies from '../pages/FormCompanies';
import FormColaborators from '../pages/FormColaborators';

function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route
          path="/companies"
          element={
            <PrivateWrapper>
              <Companies />
            </PrivateWrapper>
          }
        />

        <Route
          path="/services"
          element={
            <PrivateWrapper>
              <Services />
            </PrivateWrapper>
          }
        />
        <Route
          path="/colaborators"
          element={
            <PrivateWrapper>
              <Colaborators />
            </PrivateWrapper>
          }
        />
        <Route
          path="/form-services"
          element={
            <PrivateWrapper>
              <FormServices />
            </PrivateWrapper>
          }
        />
        <Route
          path="/form-companies"
          element={
            <PrivateWrapper>
              <FormCompanies />
            </PrivateWrapper>
          }
        />
        <Route
          path="/form-colaborators"
          element={
            <PrivateWrapper>
              <FormColaborators />
            </PrivateWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
