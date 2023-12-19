import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const Customers = () => {

  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setCustomers(data?.data);
    });
  }, []);

  return (
 <>
 <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
 <Grid item xs={12}>
 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Customers
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.company.name}</TableCell>
              <TableCell>{customer.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </Paper>
  </Grid>
  </Container>   
  </> 
  );
}

export default Customers