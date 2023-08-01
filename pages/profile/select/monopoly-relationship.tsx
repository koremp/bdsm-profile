import MonopolyRelationshipComponent from 'src/components/select/MonopolyRelationship';
import Bottom from 'src/components/Bottom';

export default function MonopolyRelationshipSelectProfilePage() {
  return (
    <>
      <MonopolyRelationshipComponent />
      <Bottom
        backHref='/profile/select'
        backName='Back'
        nextHref='/profile/select/bdsm'
        nextName='BDSM'
      />
    </>
  );
};