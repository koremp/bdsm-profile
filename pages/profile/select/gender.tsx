import Page from 'src/components/Page';
import GenderComponent from 'src/components/select/Gender';

export default function GenderSelectProfilePage() {
  return (
    <Page
      titleText='Profile Select - Gender'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/romantic-preference',
        nextName: 'Romantic Preference',
      }}>
      <GenderComponent />
    </Page >
  );
};