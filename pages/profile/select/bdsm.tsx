import BDSMComponent from 'src/components/select/BDSM';
import Bottom from 'src/components/Bottom';

export default function BDSMSelectProfilePage() {
  return (
    <>
      <BDSMComponent />
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/power-exchange'
        nextName='Power Exchange'
      />
    </>
  );
};