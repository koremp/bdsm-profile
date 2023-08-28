import Page from 'src/components/Page';
import Age from 'src/components/select/Age';

export default function AgeSelectProfilePage() {
  return (
    <Page
      titleText="Age"
      bottom={{
        back: {
          href: 'profile/select',
          name: 'Back',
        },
        middle: undefined,
        next: {
          href: '/profile/select/gender',
          name: 'Gender',
        },
      }}
    >
      <Age />
    </Page>
  );
}
