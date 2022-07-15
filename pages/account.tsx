import { Button, Slider, Switch, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useState } from 'react'
import checkUser from '../Components/checkUser'
import { useAuth } from '../lib/AuthContext'
import styles from '../styles/Account.module.scss'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/system'

export default function Account() {
  const context = useAuth()
  checkUser()

  const [displayName, setDisplayName] = useState();
  const [defaultSets, setDefaultSets] = useState(1);
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <h1>Account</h1>
      <div className={styles.account}>
        <TextField
          type='text' label='Name'
          helperText='Please enter your name'
          value={displayName}
          onChange={(e: any) => setDisplayName(e.target.value)}
        />
        <CustomSlider
          label={`Default number of sets: ${defaultSets}`}
          value={defaultSets}
          onChange={(e: any) => setDefaultSets(e.target.value)} />
        <FormControlLabel
          control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
          label="Change Theme" labelPlacement="start"
        />
        <Button variant='contained' onClick={() => { }}>Save Changes</Button>
        <Button variant='contained' onClick={context.logOut}>Log Out</Button>
      </div>
    </>
  )
}

const CustomSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const CustomSlider = (props: any) => {
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {props.label}
      </Typography>
      <Slider
        value={props.value}
        min={1}
        step={1}
        max={15}
        onChange={props.onChange}
        valueLabelDisplay="auto"
      />
    </Box>)
}