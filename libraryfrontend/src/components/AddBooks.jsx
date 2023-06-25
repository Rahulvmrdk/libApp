import { Box, Button, Container, Grid, TextField } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBooks = (props) => {
    var navigate = useNavigate()
    const [inp,setInp] = useState(props.data)
    console.log(props.method)
console.log(inp)
    const inputHandler = (e)=>{
        const {name,value} = e.target
        setInp((prev)=>({...prev,[name]:value}))
        
    }
    const addInput = ()=>{
        console.log(inp)
        if(props.method=='post'){
            axios.post("http://localhost:3008/create",inp)
        .then((res)=>{
            alert('data saved')
            navigate('/')
        })
        .catch((err)=>{console.log(err)})
        setInp({BookName:'',author:'',language:'',genre:'',bookNum:''})
        }
        if(props.method=='put'){
            axios.put('http://localhost:3008/edit/'+inp._id,inp
            )
            .then((res)=>{
                alert('Updated')
                window.location.reload(false)
            })
        }
        
    }
  return (
    <Container sx={{paddingTop:'200px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box component={'main'} sx={{ paddingTop:'40px',bgcolor: '#cfe8fc', height: '50vh',width:'75%',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)',borderRadius:'15px' }}>
            <Grid  container spacing={2} rowSpacing={1}>
                <Grid  xs={6} md={6}>
                    <TextField required id='standard-required' name='BookName' value={inp.BookName} onChange={inputHandler} label='Book Name' variant='standard' placeholder='Book Name'/>
                </Grid>
                <Grid  xs={6} md={6}>
                    <TextField required id='standard-required' name='author' value={inp.author} onChange={inputHandler} label='Author' variant='standard' placeholder='Author'/>
                </Grid>
                <Grid  xs={6} md={6}>
                    <TextField required id='standard-required' name='language' value={inp.language} onChange={inputHandler} label='Language' variant='standard' placeholder='Language'/>
                </Grid>
                <Grid  xs={6} md={6}>
                    <TextField required id='standard-required' name='genre' value={inp.genre} onChange={inputHandler} label='Genre' variant='standard' placeholder='Genre'/>
                </Grid>
                <Grid  xs={12} md={12}>
                    <TextField required id='standard-required' name='bookNum' value={ inp.bookNum} onChange={inputHandler} label='Book Number' variant='standard' placeholder='Book Number'/>
                </Grid>
                <Grid xs={12} md={12}>
                    <br />
                    <Button variant='contained' color='success' onClick={addInput}>Submit</Button>
                </Grid>

            </Grid>
            
            
            
            
            

        </Box>
    </Container>
  )
}

export default AddBooks