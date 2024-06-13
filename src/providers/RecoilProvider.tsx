import { RecoilRoot } from 'recoil';

interface PropInterface {
  children: React.ReactNode;
}

const RecoilProvider = ({ children }: PropInterface) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
