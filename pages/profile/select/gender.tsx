import GenderComponent from 'src/components/select/Gender';
import Bottom from 'src/components/Bottom';

export default function GenderSelectProfilePage() {
  return (
    <>
      <GenderComponent />
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/romantic-preference'
        nextName='Romantic Preference'
      />
    </>
  );
};