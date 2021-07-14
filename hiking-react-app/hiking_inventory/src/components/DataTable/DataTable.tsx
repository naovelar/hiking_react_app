import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import {useGetData} from '../../custom-hooks'
import { makeStyles } from '@material-ui/core';
import {Theme, createStyles} from '@material-ui/core';
import hiking_men from '../../assests/images/hiking_men.png';
import { server_calls } from '../../api'; // ADD THIS
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; // ADD THESE
import { ReviewForm } from '../../components/ReviewForm'; // ADD THIS

interface gridData{
  data:{
    id?:string;
  }
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'trail', headerName: 'Trail', width: 150 },
    { field: 'season', headerName: 'Season', type: 'number', width: 130,},
    {field: 'difficulty', headerName: 'Difficulty', width: 130,},
    {field: 'rating', headerName: 'Rating', type: 'number', width:130,}
    
  ];

const useStyles = makeStyles( (theme:Theme) =>
  createStyles({
  main: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
  },
}));

    export const DataTable =  () => {
  
      let { reviewData, getData } = useGetData();
      let [open, setOpen] = useState(false);
      let [gridData, setData] = useState<gridData>({data:{}})
    
      let handleOpen = () => {
        setOpen(true)
      }
    
      let handleClose = () => {
        setOpen(false)
      }
    
      let deleteData = () => {
        server_calls.delete(gridData.data.id!)
        getData()
      }
    
      console.log(gridData.data.id)
    
        return (
            <div style={{ height: 400, width: '100%' }}>
              <h2>Ratings?Reviews In Inventory</h2>
              <DataGrid rows={reviewData} columns={columns} pageSize={15} checkboxSelection onRowSelected = { setData } />
    
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
    
              {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Update Review </DialogTitle>
              <DialogContent>
                <DialogContentText>Update Review</DialogContentText>
                  <ReviewForm id={gridData.data.id!}/>
              </DialogContent>
              <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color = "primary">Done</Button> 
              </DialogActions>
            </Dialog>
            </div>
          );
    }
    