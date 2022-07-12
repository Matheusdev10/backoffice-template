import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormColaboratorsTemplate from '../templates/FormColaboratorsTemplate';

const FormColaborators: React.FC = () => {
  const navigate = useNavigate();
  const handleClickPrev = () => {
    navigate('/colaborators');
  };

  return <FormColaboratorsTemplate handleClickPrev={handleClickPrev} />;
};

export default FormColaborators;
