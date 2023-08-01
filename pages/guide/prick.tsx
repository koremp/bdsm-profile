import Page from 'src/components/Page';

export default function PRICKGuidePage() {
  return (
    <Page
      titleText='PRICK'
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/cnc',
        nextName: 'CNC',
      }}
    />
  );
};;