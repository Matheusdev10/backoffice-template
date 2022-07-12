import { Button, Container, Divider, Heading } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AiFillPhone, AiOutlineUserAdd } from 'react-icons/ai';
import { MdDateRange, MdWork } from 'react-icons/md';
import { useLocation, useParams } from 'react-router-dom';
import * as yup from 'yup';

import InputForm from '../../components/InputForm';

const schema = yup.object().shape({
  name: yup.string().required('O campo Nome é obrigatório'),
  phone: yup.string().required('O campo Telefone é obrigatório'),
  birthdate: yup
    .string()
    .required('O campo Abertura do> expediente é obrigatório'),
  interval: yup
    .string()
    .required('O campo Intervalo de atendimento é obrigatório'),
  closeTime: yup
    .string()
    .required('O campo Fechamento do expediente é obrigatório'),
});

interface IFormColaboratorsTemplate {
  handleClickPrev(): void;
}

const FormColaboratorsTemplate: React.FC<IFormColaboratorsTemplate> = ({
  handleClickPrev,
}) => {
  const location = useLocation();
  console.log(location.state);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container mt="30">
      <Heading as="h4" size="md">
        Novo Colaborador
      </Heading>
      <Divider mt="2" mb="5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label="Nome"
          type="text"
          name="name"
          register={register}
          Icon={AiOutlineUserAdd}
          error={errors.name}
        />
        <InputForm
          label="Celular"
          type="number"
          name="phone"
          register={register}
          Icon={AiFillPhone}
          error={errors.phone}
        />
        <InputForm
          label="Data de nascimento"
          type="date"
          name="birthdate"
          register={register}
          Icon={MdDateRange}
          error={errors.birthdate}
        />
        <InputForm
          label="Profissão"
          type="text"
          name="profession"
          register={register}
          Icon={MdWork}
          error={errors.profession}
        />

        <Button mt="10" w="100%" type="submit" colorScheme="blue">
          Salvar
        </Button>
        <Button
          onClick={handleClickPrev}
          mt="2"
          w="100%"
          type="button"
          colorScheme="red"
        >
          Voltar
        </Button>
      </form>
    </Container>
  );
};

export default FormColaboratorsTemplate;
