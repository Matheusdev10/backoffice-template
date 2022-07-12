import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import { Button, Container, Flex, Link } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputForm from '../../components/InputForm';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('O campo deve ser um E-mail válido')
    .required('O campo E-mail é obrigatório'),
  password: yup.string().required('O campo senha é obrigatório'),
});

const SignInTemplate: React.FC = () => {
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
    <Container mt="40">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label="E-mail"
          type="email"
          name="email"
          register={register}
          placeholder="E-mail"
          Icon={AtSignIcon}
          error={errors.email}
        />
        <InputForm
          label="Senha"
          type="password"
          name="password"
          register={register}
          placeholder="Senha"
          Icon={UnlockIcon}
          error={errors.password}
        />

        <Flex justifyContent={'flex-end'}>
          <Link mt="3" color="#2F855A">
            Esqueceu a senha?
          </Link>
        </Flex>

        <Button mt="10" w="100%" type="submit" colorScheme="blue">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default SignInTemplate;
