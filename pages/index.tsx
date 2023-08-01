import {
  Box,
  Typography,
} from '@mui/material'

import Head from 'next/head'

import Bottom from 'src/components/Bottom'

export default function Home() {
  return (
    <>
      <Head>
        <title>BDSM Profile</title>
        <meta name="description" content="Index Page of BDSM Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Typography variant='h3'>BDSM Profile</Typography>
        <Typography>
          Sign In, Sign Out
        </Typography>
        <Bottom
          backHref='/profile/select'
          backName='Profile Select'
          nextHref='/guide'
          nextName='Guide'
        />
      </>
    </>
  )
}