import Page from 'src/components/Page';
import GenderComponent from 'src/components/select/Gender';

export default function GenderSelectProfilePage() {
  return (
    <Page
      titleText="Gender"
      bottom={{
        back: {
          href: 'profile/select/gender',
          name: 'Gender',
        },
        middle: {
          href: '/profile/select',
          name: 'Back',
        },
        next: {
          href: '/profile/select/romantic-preference',
          name: 'Romantic Preference',
        },
      }}
    >
      <GenderComponent />
    </Page>
  );
}
