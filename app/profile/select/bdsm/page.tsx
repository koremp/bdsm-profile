import BDSMComponent from 'src/components/select/BDSM';
import Page from 'src/components/Page';

export default function BDSMSelectProfilePage() {
  return (
    <Page
      titleText="BDSM"
      bottom={{
        back: {
          href: '/profile/select/monopoly-relationship',
          name: 'Monopoly Relationship',
        },
        middle: {
          href: '/profile/select',
          name: 'Back',
        },
        next: {
          href: '/profile/select/power-exchange',
          name: 'Power Exchange',
        },
      }}
    >
      <BDSMComponent />
    </Page>
  );
}
