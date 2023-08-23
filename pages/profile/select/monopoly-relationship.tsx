import Page from 'src/components/Page';
import MonopolyRelationshipComponent from 'src/components/select/MonopolyRelationship';

export default function MonopolyRelationshipSelectProfilePage() {
  return (
    <Page
      titleText='Profile Select - Monopoly Relationship'
      bottom={{
        backHref: '/profile/select',
        backName: 'Back',
        nextHref: '/profile/select/bdsm',
        nextName: 'BDSM',
      }}
    >
      <MonopolyRelationshipComponent />
    </Page>
  );
}