import { Button, Container, Divider, Heading } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AiOutlineFieldTime, AiOutlineUserAdd } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import * as yup from 'yup';
import InputForm from '../../components/InputForm';

const schema = yup.object().shape({
  name: yup.string().required('O campo Nome é obrigatório'),
  price: yup
    .number()
    .typeError('O campo Preço deve ser um número')
    .required('O campo Preço é obrigatório')
    .positive('O Preço deve ser um número positivo')
    .nullable(true)
    .default(0),
  time: yup.string().required('O campo Hora é obrigatório'),
});

interface IFormServicesTemplate {
  handleClickPrev(): void;
}

const FormServicesTemplate: React.FC<IFormServicesTemplate> = ({
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
        Novo serviço
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
          label="Preço"
          type="number"
          name="price"
          register={register}
          Icon={MdAttachMoney}
          error={errors.price}
        />
        <InputForm
          label="Hora"
          type="time"
          name="time"
          register={register}
          Icon={AiOutlineFieldTime}
          error={errors.time}
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

export default FormServicesTemplate;
