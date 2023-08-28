import Page from 'src/components/Page';
import RomanticPreferenceComponent from 'src/components/select/RomanticPreference';

export default function RomanticPreferenceSelectProfilePage() {
  return (
    <Page
      titleText="Romantic Preference"
      bottom={{
        back: {
          href: '/profile/select/gender',
          name: 'Gender',
        },
        middle: {
          href: '/profile/select',
          name: 'Back',
        },
        next: {
          href: '/profile/select/sexual-preference',
          name: 'Sexual Preference',
        },
      }}
    >
      <RomanticPreferenceComponent />
    </Page>
  );
}
