import Page from 'src/components/Page';

export default function CNCGuidePage() {
  return (
    <Page
      titleText='CNC'
      bottom={{
        backHref: '/guide',
        backName: 'Back',
        nextHref: '/guide/cccc',
        nextName: 'CCCC',
      }}
    />
  );
};;