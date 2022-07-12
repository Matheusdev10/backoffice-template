import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { TableHeader } from '../../components/TableHeader';
import { TService } from '../../entities/Service';

interface IServicesTemplate {
  services: TService[];
  handleClickEdit(): void;
}

const ServicesTemplate: React.FC<IServicesTemplate> = ({
  services,
  handleClickEdit,
}) => {
  return (
    <Box w="100%" p="10">
      <TableHeader pageName="Serviços" />
      <TableContainer mt="20">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Preço</Th>
              <Th>Hora</Th>
              <Th textAlign={'center'}>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {services.map((service) => {
              return (
                <Tr>
                  <Td>{service.name}</Td>
                  <Td>R$ {service.price},00</Td>
                  <Td>{service.time} min</Td>

                  <Td textAlign={'center'}>
                    <IconButton
                      onClick={handleClickEdit}
                      mr="3"
                      aria-label="icon-edit"
                      icon={<EditIcon />}
                    />
                    <IconButton
                      aria-label="icon-delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ServicesTemplate;
