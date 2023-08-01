import SexualPreferenceComponent from 'src/components/select/SexualPreference';
import Bottom from 'src/components/Bottom';

export default function SexualPreferenceSelectProfilePage() {
  return (
    <>
      <SexualPreferenceComponent />
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/monopoly-relationship'
        nextName='Monopoly Relationship'
      />
    </>
  );
};