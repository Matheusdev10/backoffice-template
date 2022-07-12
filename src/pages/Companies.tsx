import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPANIE1_MOCK, COMPANIE2_MOCK } from '../mocks/Companie';
import CompaniesTemplate from '../templates/CompaniesTemplate';

const Companies: React.FC = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate('/form-companies');
  };

  return (
    <CompaniesTemplate
      companies={[COMPANIE1_MOCK, COMPANIE2_MOCK]}
      handleClickEdit={handleClickEdit}
    />
  );
};

export default Companies;
