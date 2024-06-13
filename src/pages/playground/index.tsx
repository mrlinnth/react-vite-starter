import LogInForm from '@/components/forms/LogInForm';
import { tokenState } from '@/utils/atoms';
import { useRecoilValue } from 'recoil';

export default function Playground() {
  const token = useRecoilValue(tokenState);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <LogInForm />
        <div className="card card-bordered bg-neutral text-primary-content">
          <div className="card-body">
            <p>Current token : {token}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
