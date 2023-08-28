import Page from 'src/components/Page';
import MonopolyRelationshipComponent from 'src/components/select/MonopolyRelationship';

export default function MonopolyRelationshipSelectProfilePage() {
  return (
    <Page
      titleText="Monopoly Relationship"
      bottom={{
        back: {
          href: '/profile/select/sexual-preference',
          name: 'Sexual Preference',
        },
        middle: {
          href: '/profile/select',
          name: 'Back',
        },
        next: {
          href: '/profile/select/bdsm',
          name: 'BDSM',
        },
      }}
    >
      <MonopolyRelationshipComponent />
    </Page>
  );
}
