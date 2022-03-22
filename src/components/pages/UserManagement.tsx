import { Box, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          w='260px'
          h='260px'
          bg='white'
          borderRadius='10px'
          shadow='md'
          p={4}
          _hover={{ cursor: 'pointer', opacity: 0.8 }}
        >
          <Stack textAlign='center'>
            <Image
              borderRadius='full'
              boxSize='160px'
              src='https://source.unsplash.com/random'
              alt='プロフィール画像'
              margin='auto'
            ></Image>
            <Text fontSize='lg' fontWeight='bold'>
              okabeeeat
            </Text>
            <Text fontSize='sm' color='gray'>
              okabeeeat okabeeeat
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
