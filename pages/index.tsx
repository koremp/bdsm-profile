import {
  Box,
  Typography,
} from '@mui/material'

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>BDSM Profile</title>
        <meta name="description" content="Index Page of BDSM Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Typography variant='h3'>BDSM Profile</Typography>
        <Box>
          Sign In, Sign Out
          <Link href='/profile/select'>
            Profile Select
          </Link>
          <Link href='/guide'>
            Guide
          </Link>
        </Box>
      </Box>
    </>
  )
}