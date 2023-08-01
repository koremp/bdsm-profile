import Page from 'src/components/Page';

export default function SSCGuidePage() {
  return (
    <Page
      titleText='SSC'
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/rack',
        nextName: 'RACK',
      }}
    />
  );
};