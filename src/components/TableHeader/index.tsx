import { HStack, Heading, Button } from '@chakra-ui/react';
import React from 'react';

interface ITableHeader {
  pageName: string;
}

export const TableHeader: React.FC<ITableHeader> = ({ pageName }) => {
  return (
    <HStack justifyContent={'space-between'}>
      <Heading as="h4" size="md">
        {pageName}
      </Heading>

      <Button type="submit" colorScheme="blue">
        Novo
      </Button>
    </HStack>
  );
};
