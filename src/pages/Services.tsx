import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICE1_MOCK, SERVICE2_MOCK } from '../mocks/Services';
import ServicesTemplate from '../templates/ServicesTemplate';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate('/form-services');
  };

  return (
    <ServicesTemplate
      services={[SERVICE1_MOCK, SERVICE2_MOCK]}
      handleClickEdit={handleClickEdit}
    />
  );
};

export default Services;
