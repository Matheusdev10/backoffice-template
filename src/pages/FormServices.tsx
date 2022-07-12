import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormServicesTemplate from '../templates/FormServicesTemplate';

const FormServices: React.FC = () => {
  const navigate = useNavigate();
  const handleClickPrev = () => {
    navigate('/services');
  };

  return <FormServicesTemplate handleClickPrev={handleClickPrev} />;
};

export default FormServices;
