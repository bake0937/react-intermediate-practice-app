import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  // 注) ここ(login関数の外)にsetLoading(true);を書くと Too many re-renders が発生する

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'ログインに成功しました', status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
            alert('ユーザーが見つかりません');
          }
        })
        .catch(() =>
          showMessage({ title: 'ログインできません', status: 'error' }),
        )
        .finally(() => setLoading(false));
    },
    [history, showMessage],
  );
  return { login, loading };
};
