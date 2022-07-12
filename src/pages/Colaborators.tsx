import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLABORATOR1_MOCK, COLABORATOR2_MOCK } from '../mocks/Colaborator';

import ColaboratorsTemplate from '../templates/ColaboratorsTemplate';

const Colaborators: React.FC = () => {
  const navigate = useNavigate();
  const handleClickEdit = () => {
    navigate('/form-colaborators', { state: { name: 'matheus' } });
  };

  return (
    <ColaboratorsTemplate
      colaborators={[COLABORATOR1_MOCK, COLABORATOR2_MOCK]}
      handleClickEdit={handleClickEdit}
    />
  );
};

export default Colaborators;
