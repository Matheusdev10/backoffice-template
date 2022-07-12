import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Avatar,
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
import { TCompanie } from '../../entities/Companie';

interface ICompaniesTemplate {
  companies: TCompanie[];
  handleClickEdit(): void;
}

const CompaniesTemplate: React.FC<ICompaniesTemplate> = ({
  companies,
  handleClickEdit,
}) => {
  return (
    <Box w="100%" p="10">
      <TableHeader pageName="Empresas" />
      <TableContainer mt="20">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Nome</Th>
              <Th>Endereço</Th>
              <Th>Horário de fechar</Th>
              <Th>Intervalo</Th>
              <Th>Horário de abertura</Th>

              <Th textAlign={'center'}>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {companies.map((companie) => {
              return (
                <Tr>
                  <Td>
                    <Avatar name={companie.name} src={companie.img} />
                  </Td>
                  <Td>{companie.name}</Td>
                  <Td>{companie.street}</Td>
                  <Td textAlign={'center'}>{companie.closeTime}:00 h</Td>
                  <Td textAlign={'center'}>{companie.interval} min </Td>
                  <Td textAlign={'center'}>{companie.openTime}:00 h</Td>

                  <Td>
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

export default CompaniesTemplate;
