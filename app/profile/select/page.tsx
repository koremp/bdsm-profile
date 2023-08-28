import { ButtonGroup } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

import LinkButton, { LinkButtonProps } from 'src/components/LinkButton';
import Page from 'src/components/Page';

export default function IndexSelectProfilePage() {
  const links: LinkButtonProps[] = [
    { href: '/profile/select/age', name: 'Age' },
    { href: '/profile/select/gender', name: 'Gender' },
    { href: '/profile/select/romantic-preference', name: 'Romantic Preference' },
    { href: '/profile/select/sexual-preference', name: 'Sexual Preference' },
    { href: '/profile/select/monopoly-relationship', name: 'Monopoly Relationship' },
    { href: '/profile/select/bdsm', name: 'BDSM' },
    { href: '/profile/select/power-exchange', name: 'Power Exchange' },
    { href: '/profile/select/bdsm-checklist', name: 'BDSM Checklist' },
  ];

  return (
    <Page titleText="Select Profile">
      <ButtonGroup
        fullWidth
        orientation="vertical"
        aria-label="profile select button group"
        key="profile-select-button-group"
        sx={{
          backgroundColor: `${deepPurple[100]}`,
        }}
      >
        {links.map(({ href, name }) => (
          <LinkButton key={href} href={href} name={name} />
        ))}
      </ButtonGroup>
      <ButtonGroup
        fullWidth
        sx={{
          mt: 'auto',
          backgroundColor: `${deepPurple[100]}`,
        }}
        aria-label="bottom button group"
        key="bottom-button-group"
      >
        <LinkButton href="/" name="back" />
      </ButtonGroup>
    </Page>
  );
}
