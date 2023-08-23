import BDSMComponent from 'src/components/select/BDSM';
import Page from 'src/components/Page';

export default function BDSMSelectProfilePage() {
  return (
    <Page
      titleText='Profile Select - BDSM'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/power-exchange',
        nextName: 'Power Exchange',
      }}
    >
      <BDSMComponent />
    </Page>
  );
}