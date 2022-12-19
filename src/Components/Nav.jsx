import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <Stack direction="row" justifyContent='space-around' >
            <Stack>
                <span>Logo</span>
            </Stack>
            <Stack direction="row">
                <Link to="/">Home</Link>
                <Link to="/">Profile</Link>
                <Link to="/">Cart</Link>
            </Stack>
        </Stack>
    )
}
