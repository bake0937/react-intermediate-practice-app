import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, useEffect, VFC } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  // コンポーネントをマウント時([]に何も指定しない)にユーザー一覧を取得する
  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
