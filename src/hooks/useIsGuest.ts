import { tokenState } from '@/utils/atoms';
import { useRecoilValue } from 'recoil';

export default function useIsGuset() {
  const token = useRecoilValue(tokenState);
  return token === '' || !token || token === undefined ? true : false;
}
