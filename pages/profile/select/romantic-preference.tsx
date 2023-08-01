import RomanticPreferenceComponent from 'src/components/select/RomanticPreference';
import Bottom from 'src/components/Bottom';

export default function RomanticPreferenceSelectProfilePage() {
  return (
    <>
      <RomanticPreferenceComponent />
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/sexual-preference'
        nextName='Sexual Preference'
      />
    </>
  );
};