// import React from 'react'
// import ListView from '../../../../views/ui-elements/data-list/ListView'
// import AgdivTable from './aggeridTable'

// import CountryCreate from './countryCreate'

// function CountryList() {
//     return (
//         <div className="body">

//         <div className="row">
//             <div className="col-md-4">
//                 <CountryCreate/>
//             </div>
//             <div className="col-md-8">
//                 <h1>Country Table</h1>
//                 {/* <AgdivTable/> */}
//                 {/* <ListView/> */}
//             </div>
            
//         </div>
//         </div>
//     )
// }

// export default CountryList



import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/country";
import { div, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";

import CountryCreate from './countryCreate';



const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const CountryList = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllCountry()
    }, [])
    
    
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteCountry(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }
    return (
        <div  elevation={3}>
            <div className="row">
                <div item className="col-md-6">
                    <CountryCreate {...({ currentId, setCurrentId })} />
                </div>
                <div item className="col-md-6">
                    <h1>Country List</h1>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>States</TableCell>
                                    <TableCell>Employees</TableCell>
                                    <TableCell>Clients</TableCell>
                                   
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.countryList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>N/A</TableCell>
                                            <TableCell>N/A</TableCell>
                                            <TableCell>N/A</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    countryList: state.country.list
})

const mapActionToProps = {
    fetchAllCountry: actions.fetchAll,
    deleteCountry: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CountryList));
