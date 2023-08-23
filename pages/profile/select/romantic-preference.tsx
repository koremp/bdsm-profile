import Page from 'src/components/Page';
import RomanticPreferenceComponent from 'src/components/select/RomanticPreference';

export default function RomanticPreferenceSelectProfilePage() {
  return (
    <Page
      titleText='Select Profile - Romantic Preference'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/sexual-preference',
        nextName: 'Sexual Preference',
      }}
    >
      <RomanticPreferenceComponent />
    </Page>
  );
}