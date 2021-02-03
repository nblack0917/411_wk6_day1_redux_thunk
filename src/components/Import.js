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
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [curIndex, setCurIndex] = React.useState(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                    {props.makes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((make, index) => (
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
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={3}
                        count={props.makes.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        // ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
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