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
import { CELULAR } from '@yagolopes/masks/lib/br';
import { format } from 'date-fns';

import { TableHeader } from '../../components/TableHeader';
import { TColaborator } from '../../entities/Colaborator';

interface IColaboratorsTemplate {
  colaborators: TColaborator[];
  handleClickEdit(): void;
}

const ColaboratorsTemplate: React.FC<IColaboratorsTemplate> = ({
  colaborators,
  handleClickEdit,
}) => {
  return (
    <Box w="100%" p="10">
      <TableHeader pageName="Colaboradores" />
      <TableContainer mt="20">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Nome</Th>
              <Th>Celular</Th>
              <Th>Data de Nascimento</Th>
              <Th>Profissão</Th>
              <Th textAlign={'center'}>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {colaborators.map((colaborator) => {
              return (
                <Tr>
                  <Td>
                    <Avatar src={colaborator.img} />
                  </Td>
                  <Td>{colaborator.name}</Td>
                  <Td>{CELULAR.mask(colaborator.phone)}</Td>
                  <Td>
                    {format(new Date(colaborator.birthdate), 'dd/MM/yyyy')}
                  </Td>
                  <Td>{colaborator.profession}</Td>
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

export default ColaboratorsTemplate;
