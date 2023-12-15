import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
  
  },

}));

function createData(name, Campaigns, Clicks, Cost, Conversions,Revenue) {
  return { name, Campaigns, Clicks, Cost, Conversions ,Revenue};
}

const rows = [
  createData('Cosmetics', 712,  272, 8,  16),
  createData('Serums', 961,  2331, 115,  11),
  createData('FaceWash', 462,  76, 831, 123),
  createData('Shampoos', 439,  151,  29,12),
  createData('Conditioners', 123,  3864, 49,  175),
  createData('FaceWash2', 978,  29, 189,  623),
  createData('Toatal', 2510  ,819, 489, 563),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{ width: '40%' }}>
      <Table dx={{ minWidth: 10 }}   >
        <TableHead>
          <TableRow style={{width:'1%'}}>
            <StyledTableCell align="Left" style={{ width: '10%' }}>Campaigns</StyledTableCell>
            <StyledTableCell align="Left" style={{ width: '10%' }}>Clicks</StyledTableCell>
            <StyledTableCell align="Left" style={{ width: '10%' }}>Cost</StyledTableCell>
            <StyledTableCell align="Left" style={{ width: '10%' }}>Conversions</StyledTableCell>
            <StyledTableCell align="Left" style={{ width: '10%' }}>Revenue</StyledTableCell>
			
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="Left" style={{ width: '10%' }}>{row.Campaigns}</StyledTableCell>
              <StyledTableCell align="Left" style={{ width: '10%' }}>{row.Clicks}</StyledTableCell>
              <StyledTableCell align="Left" style={{ width: '10%' }}>{row.Cost}</StyledTableCell>
              <StyledTableCell align="Left" style={{ width: '10%' }}>{row.Conversions}</StyledTableCell>
			  <StyledTableCell align="Left" style={{ width: '20%' }}>{row.Revenue}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
  );
}
