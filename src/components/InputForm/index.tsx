import {
  ComponentWithAs,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

interface IInputForm extends InputProps {
  error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>;
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  Icon: ComponentWithAs<'svg', IconProps> | any;
}

const InputForm: React.FC<IInputForm> = ({
  error,
  register,
  name,
  type,
  placeholder,
  label,
  Icon,
}) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon color="secundary.500" />}
        />
        <Input {...register(name)} type={type} placeholder={placeholder} />
      </InputGroup>
      {!!error && <FormErrorMessage>{String(error.message)}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputForm;
