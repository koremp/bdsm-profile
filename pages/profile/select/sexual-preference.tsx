import Page from 'src/components/Page';
import SexualPreferenceComponent from 'src/components/select/SexualPreference';

export default function SexualPreferenceSelectProfilePage() {
  return (
    <Page
      titleText='Profile Select - Sexual Preference'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/monopoly-relationship',
        nextName: 'Monopoly Relationship',
      }}
    >
      <SexualPreferenceComponent />
    </Page>
  );
}