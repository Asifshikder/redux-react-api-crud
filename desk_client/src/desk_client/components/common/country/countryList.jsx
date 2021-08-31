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
//                  {/* <AgdivTable/>  */}
//                 /* <ListView/> 
//             </div>
            
//         </div>
//         </div>
//     )
// }

// export default CountryList



// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import * as actions from "../../../redux/actions/country";
// import { div, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";

// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { useToasts } from "react-toast-notifications";

// import CountryCreate from './countryCreate';



// const styles = theme => ({
//     root: {
//         "& .MuiTableCell-head": {
//             fontSize: "1.25rem"
//         }
//     },
//     paper: {
//         margin: theme.spacing(2),
//         padding: theme.spacing(2)
//     }
// })

// const CountryList = ({ classes, ...props }) => {
//     const [currentId, setCurrentId] = useState(0)

//     useEffect(() => {
//         props.fetchAllCountry()
//     }, [])
    
    
//     const { addToast } = useToasts()

//     const onDelete = id => {
//         if (window.confirm('Are you sure to delete this record?'))
//             props.deleteCountry(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
//     }
//     return (
//         <div  elevation={3}>
//             <div className="row">
//                 <div item className="col-md-6">
//                     <CountryCreate {...({ currentId, setCurrentId })} />
//                 </div>
//                 <div item className="col-md-6">
//                     <h1>Country List</h1>
//                     <TableContainer>
//                         <Table>
//                             <TableHead className={classes.root}>
//                                 <TableRow>
//                                     <TableCell>Name</TableCell>
//                                     <TableCell>States</TableCell>
//                                     <TableCell>Employees</TableCell>
//                                     <TableCell>Clients</TableCell>
                                   
//                                     <TableCell>Actions</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {
//                                     props.countryList.map((record, index) => {
//                                         return (<TableRow key={index} hover>
//                                             <TableCell>{record.name}</TableCell>
//                                             <TableCell>N/A</TableCell>
//                                             <TableCell>N/A</TableCell>
//                                             <TableCell>N/A</TableCell>
//                                             <TableCell>
//                                                 <ButtonGroup variant="text">
//                                                     <Button><EditIcon color="primary"
//                                                         onClick={() => { setCurrentId(record.id) }} /></Button>
//                                                     <Button><DeleteIcon color="secondary"
//                                                         onClick={() => onDelete(record.id)} /></Button>
//                                                 </ButtonGroup>
//                                             </TableCell>
//                                         </TableRow>)
//                                     })
//                                 }
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = state => ({
//     countryList: state.country.list
// })

// const mapActionToProps = {
//     fetchAllCountry: actions.fetchAll,
//     deleteCountry: actions.Delete
// }

// export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CountryList));


// import React,{useState,useCallback} from 'react';
// import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {

//   const [editRowsModel, setEditRowsModel] = React.useState({});

//   const handleEditRowsModelChange = React.useCallback((model) => {
//     setEditRowsModel(model);
//     console.log(model);
//   }, []);
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <h1>Material Table</h1>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//         editable={true}
//         onEditRowsModelChange={handleEditRowsModelChange}
//       />
//     </div>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Close';
import {
  useGridApiRef,
  DataGridPro,
  GridToolbarContainer,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
  }),
  { defaultTheme },
);

function RowMenuCell(props) {
  const { api, id } = props;
  const classes = useStyles();
  const isInEditMode = api.getRowMode(id) === 'edit';

  const handleEditClick = (event) => {
    event.stopPropagation();
    api.setRowMode(id, 'edit');
  };

  const handleSaveClick = (event) => {
    event.stopPropagation();
    api.commitRowChange(id);
    api.setRowMode(id, 'view');

    const row = api.getRow(id);
    api.updateRows([{ ...row, isNew: false }]);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    api.updateRows([{ id, _action: 'delete' }]);
  };

  const handleCancelClick = (event) => {
    event.stopPropagation();
    api.setRowMode(id, 'view');

    const row = api.getRow(id);
    if (row.isNew) {
      api.updateRows([{ id, _action: 'delete' }]);
    }
  };

  if (isInEditMode) {
    return (
      <div className={classes.root}>
        <IconButton
          color="primary"
          size="small"
          aria-label="save"
          onClick={handleSaveClick}
        >
          <SaveIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          aria-label="cancel"
          className={classes.textPrimary}
          onClick={handleCancelClick}
        >
          <CancelIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        className={classes.textPrimary}
        size="small"
        aria-label="edit"
        onClick={handleEditClick}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="inherit"
        size="small"
        aria-label="delete"
        onClick={handleDeleteClick}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

RowMenuCell.propTypes = {
  api: PropTypes.object.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

const rows = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: RowMenuCell,
    sortable: false,
    width: 100,
    headerAlign: 'center',
    filterable: false,
    align: 'center',
    disableColumnMenu: true,
    disableReorder: true,
  },
];

function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = randomId();
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.setRowMode(id, 'edit');
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });

      apiRef.current.setCellFocus(id, 'name');
    }, 150);
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

export default function FullFeaturedCrudGrid() {
  const apiRef = useGridApiRef();

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  return (
    <div style={{ height: 500, width: '100%' }}>
      <h1>Material Table</h1>
      <DataGridPro
        rows={rows}
        columns={columns}
        apiRef={apiRef}
        editMode="row"
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { apiRef },
        }}
      />
    </div>
  );
}