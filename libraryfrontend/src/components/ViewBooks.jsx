import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import AddBooks from './AddBooks'

const ViewBooks = () => {
    const [update,setUpdate] = useState(false)
    const [books,setBooks] = useState([])
    const [singleVal,setSingleVal] = useState([])

    useEffect(()=>{
        axios.get("/api/view")
        .then((res)=>{
            console.log(res.data)
            setBooks(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    const deleteValue = (id) =>{
        console.log(id);
        axios.delete('/api/deletebooks/'+id)
        .then((res)=>{
            alert("deleted")
            window.location.reload(false)
        })
        .catch((err)=>{console.log(err)})
    }
    const updateValue = (val)=>{
        console.log('clicked')
        setUpdate(true)
        setSingleVal(val)
    }
    var finaljsx =
    <Container sx={{paddingTop:'80px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',bgcolor: '#cfe8fc'}}>
        <Box component={'main'}>
        <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Book Number</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {books.map((val,index)=>{
                return(
                    <TableRow>
                    <TableCell>{val.BookName}</TableCell>
                    <TableCell>{val.author}</TableCell>
                    <TableCell>{val.language}</TableCell>
                    <TableCell>{val.genre}</TableCell>
                    <TableCell>{val.bookNum}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(val._id)} variant='contained'>Delete</Button></TableCell>
                    <TableCell><Button variant='contained' onClick={()=>updateValue(val)}>Update</Button></TableCell>
                </TableRow>
                )
            })}
        </TableBody>
    </Table>
</TableContainer>
        </Box>
    </Container>
    
if(update) finaljsx = <AddBooks data = {singleVal} method = 'put'/>
return finaljsx;
//   return (
//     <Container sx={{paddingTop:'80px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',bgcolor: '#cfe8fc'}}>
//         <Box component={'main'}>
//              {finaljsx} 
//         </Box>
//     </Container>
//   )
}

export default ViewBooks