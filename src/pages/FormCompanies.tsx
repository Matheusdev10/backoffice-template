import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormCompaniesTemplate from '../templates/FormCompaniesTemplate';

const FormCompanies: React.FC = () => {
  const navigate = useNavigate();
  const handleClickPrev = () => {
    navigate('/companies');
  };

  return <FormCompaniesTemplate handleClickPrev={handleClickPrev} />;
};

export default FormCompanies;
