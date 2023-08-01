import PowerExchangeComponent from 'src/components/select/PowerExchange';
import Bottom from 'src/components/Bottom';

export default function PowerExchangeSelectProfilePage() {
  return (
    <>
      <PowerExchangeComponent />
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/bdsm-checklist'
        nextName='BDSM Checklist'
      />
    </>
  );
};