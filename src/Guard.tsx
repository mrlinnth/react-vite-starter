import useIsGuest from '@/hooks/useIsGuest';
import Playground from '@/pages/playground';

interface PropInterface {
  component: React.ReactNode;
}

export default function Guard({ component }: PropInterface) {
  const isGuest = useIsGuest();
  return isGuest ? <Playground /> : component;
}
