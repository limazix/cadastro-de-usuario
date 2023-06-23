import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { users as usersAPI } from "../../api";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const List = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <h1>Listar Contatos</h1>
            <Grid container spacing={1}>
                {usersAPI.getUsers().map(user => {
                    return (
                        <Grid item xs={4}>
                            <Item>{user.name}</Item>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
};

export default List;
