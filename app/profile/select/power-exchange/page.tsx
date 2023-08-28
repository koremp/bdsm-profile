import Page from 'src/components/Page';
import PowerExchangeComponent from 'src/components/select/PowerExchange';

export default function PowerExchangeSelectProfilePage() {
  return (
    <Page
      titleText="Power Exchange"
      bottom={{
        back: {
          href: '/profile/select/bdsm',
          name: 'BDSM',
        },
        middle: {
          href: '/profile/select',
          name: 'Back',
        },
        next: {
          href: 'profile/select/bdsm-checklist',
          name: 'BDSM Checklist',
        },
      }}
    >
      <PowerExchangeComponent />
    </Page>
  );
}
