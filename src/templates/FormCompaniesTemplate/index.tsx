import { TimeIcon } from '@chakra-ui/icons';
import { Button, Container, Divider, Heading } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsDoorClosedFill } from 'react-icons/bs';
import { MdGpsFixed, MdOutlineMotionPhotosPause } from 'react-icons/md';
import * as yup from 'yup';
import InputForm from '../../components/InputForm';

const schema = yup.object().shape({
  name: yup.string().required('O campo Nome é obrigatório'),
  address: yup.string().required('O campo Endereço é obrigatório'),
  openTime: yup
    .string()
    .required('O campo Abertura do expediente é obrigatório'),
  interval: yup
    .string()
    .required('O campo Intervalo de atendimento é obrigatório'),
  closeTime: yup
    .string()
    .required('O campo Fechamento do expediente é obrigatório'),
});

interface IFormCompaniesTemplate {
  handleClickPrev(): void;
}

const FormCompaniesTemplate: React.FC<IFormCompaniesTemplate> = ({
  handleClickPrev,
}) => {
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
        Nova Empresa
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
          label="Endereço"
          type="number"
          name="address"
          register={register}
          Icon={MdGpsFixed}
          error={errors.address}
        />
        <InputForm
          label="Abertura do expediente"
          type="time"
          name="openTime"
          register={register}
          Icon={TimeIcon}
          error={errors.openTime}
        />
        <InputForm
          label="Intervalo de atendimento"
          type="time"
          name="interval"
          register={register}
          Icon={MdOutlineMotionPhotosPause}
          error={errors.interval}
        />
        <InputForm
          label="Fechamento do expediente"
          type="time"
          name="closeTime"
          register={register}
          Icon={BsDoorClosedFill}
          error={errors.closeTime}
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

export default FormCompaniesTemplate;
