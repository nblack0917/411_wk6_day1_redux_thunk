import React from 'react'
import { Container, Button } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';


const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [curIndex, setCurIndex] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (index) => (event) => {
        setAnchorEl(event.currentTarget);
        setCurIndex(index);
        // console.log(index)
        // console.log(event.currentTarget)
    };
    const handleClickI = (index) => {
        props.deleteMake(index)
        setAnchorEl(null);
    };

    const handleClose = (props) => {
        setAnchorEl(null);
    };


    return (
        <Container maxWidth='sm' style={{ marginTop: 40 }}>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Import
            </Button>
            <h2>Count: {props.makes.length}</h2>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align="left">id</TableCell>
                        <TableCell align="left">Make</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={make.MakeName + index}>
                        <TableCell component="th" scope="row" align="left">
                            {make.MakeId}
                        </TableCell>
                        <TableCell align="left">{make.MakeName}</TableCell>
                        <TableCell align="left">
                            <IconButton
                                aria-label="more"
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                onClick={handleClick(index)}
                            >
                                <MoreVertIcon />
                            </IconButton>
                                
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => {handleClickI(curIndex)}}>
                    Delete
                </MenuItem>
            </Menu>
        </Container>
    )
}

export default Import