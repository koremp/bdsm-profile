import Page from 'src/components/Page';

export default function AgeSelectProfilePage() {
  return (
    <Page
      titleText='Profile Select - Age'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/gender',
        nextName: 'Gender'
      }}
    />
  );
};