import Page from 'src/components/Page';

export default function RACKGuidePage() {
  return (
    <Page
      titleText='RACK'
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/prick',
        nextName: 'PRICK',
      }}
    />
  );
};;