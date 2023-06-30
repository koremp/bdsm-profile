import {
  Box,
  Typography,
} from '@mui/material'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pride Profile</title>
        <meta name="description" content="Index Page of Pride Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Typography variant='h3'>BDSM Profile</Typography>
      </Box>
    </>
  )
}