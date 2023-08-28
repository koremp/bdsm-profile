import Page from 'src/components/Page';
import SexualPreferenceComponent from 'src/components/select/SexualPreference';

export default function SexualPreferenceSelectProfilePage() {
  return (
    <Page
      titleText="Sexual Preference"
      bottom={{
        back: {
          href: '/profile/select/romantic-preference',
          name: 'Romantic Preference',
        },
        middle: {
          href: '/profile/select',
          name: 'Back',
        },
        next: {
          href: '/profile/select/monopoly-relationship',
          name: 'Monopoly Relationship',
        },
      }}
    >
      <SexualPreferenceComponent />
    </Page>
  );
}
