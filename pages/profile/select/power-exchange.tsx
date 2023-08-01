import Page from 'src/components/Page';
import PowerExchangeComponent from 'src/components/select/PowerExchange';

export default function PowerExchangeSelectProfilePage() {
  return (
    <Page
      titleText='Select Profile - Power Exchange'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/bdsm-checklist',
        nextName: 'BDSM Checklist',
      }}>
      <PowerExchangeComponent />
    </Page>
  );
};