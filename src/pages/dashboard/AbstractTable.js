import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import NumberFormat from 'react-number-format';
import Dot from 'components/@extended/Dot';

function createData(trackingNo, iron, calories, fats, name, fat,jira, carbs, protein, alpha, beta, gyma, sigma, delta, omega) {
  return { trackingNo, iron, calories, fats, name, fat, carbs,jira, protein, alpha, beta, gyma, sigma, delta, omega};
}



const rows = [
  createData(
    1,
    0.0,
    0.0,
    0.0,
    'Item No.1: Clearing and grubbing road land including uprooting rank vegetation, grass, bushes, shrubs, saplings and trees girth up to 300 mm, removal of stumps of trees cut earlier and disposal   of   unserviceable   materials   and   stacking   of serviceable material to be used or auctioned up to a lead of 1000 metres including removal and disposal of top organic soil not exceeding 150 mm in thickness.',
    '36000.00000 ',
    "One Square Meter 0 4440.3000",
    3600.0,
    35532.0,
    3600.0,
    35532.0,
    0,
    9.87,
    0.0,
    '100%'
  ),
  createData(
    4,
    0.0,
    0.0,
    0.0,
    'Item No 4 : Extraction for roadway in hard murum and boulder including dressing section to the required grade , camber and side slopes and conveying the extraction materilas with all lifts upto a lead of 50m and spreading for embankment or stacking as directed .',
    '36000.00000',
    "One Square Meter",
    3600.0,
    35530.0,
    3600.0,
    35532.0,
    0,
    9.87,
    0.0,
    '100%'
  ),
  createData(
    5,
    0.0,
    0.0,
    0.0,
    'Item No 5 : Watering and compacting of embankment formed of materials obtained from the road cutting within a lead of 50 m , not less than 97% of standard Proctor density after laying them in layers of 20 cm tp 30 cm with Power roller.',
    '8337.25 ',
    "One Square Meter",
    8337.52,
    759131.19,
    7876.25,
    717132.56,
    461.27,
    91.05,
    41998.63,
    '100%'
  ),
 
  createData(
    6,
    0.0,
    0.0,
    0.0,
    'Item No.6: Providing   earth   work   in   embankment   with   approved materials  obtained  from  other  sources  upto  lead  of  50m. including  all  lifts,  laying  in  layers  of  20cm.  to  30cm. thickness  breaking  clods,  dressing  to  the  required  lines, curves,  grades  &amp;  section,  watering  and  compaction  with vibratory roller with V-Sat attachment to achieve not less than  97  %  of  standard  proctor  density  etc.  complete   ( Material obtained from Other sources)',
    '36000.00000',
    "One Square Meter",
    8337.52,
    759131.19,
    7876.25,
    717132.56,
    461.27,
    91.05,
    41998.63,
    '100%'
  ),
  createData(
    7,
    0.0,
    0.0,
    0.0,
    'Item No.7: Construction  of  granular  sub-base  by  providing  close graded  Material,  mixing  in  a  mechanical  mix  plant  at OMC, carriage of mixed Material to work site, spreading in  uniform  layers  with  motor  grader/  Paver  on  prepared surface and compacting with vibratory roller to achieve the desired  density,  complete  as  per  clause 401  -- Plant  Mix Method and Grading - I Material',
    '36000.00000',
    "One Square Meter",
    3600.0,
    35530.19,
    3600.0,
    35532.0,
    0,
    9.87,
    0.0,
    '100%'
  ),
  createData(
    8,
    0.0,
    0.0,
    0.0,
    'Item No.8: Construction of dry lean cement concrete Sub- base over a prepared  sub-grade   with  coarse  and  fine  aggregate  ( natural  sand/  VSI  grade  finely  washed  crushed  sand) conforming  to  IS:  383,  the  size  of  coarse  aggregate  not exceeding 25 mm, , cement content not to be less than 150 kg/  cum,  optimum  moisture  content  to  be  determined during trial length construction, concrete strength not to be less  than  10  Mpa  at  7  days,  mixed  in  a  batching  plant/ Weigh batch mixer, transported to site with all leads and lifts, laid with a paver with electronic sensor /by suitable means  as  approved  by   Engineer-in-charge  ,  compacting with   vibratory  roller,  finishing,   curing  and   including preparation of sub-grade surface if required etc. complete.',
    '36000.00000',
    "One Square Meter",
    8337.52,
    759131.19,
    7876.25,
    717132.56,
    461.27,
    91.05,
    41998.63,
    '100%'
  )
];

function descendingComparator(a, b, orderBy) {
  return b[orderBy] - a[orderBy];
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'trackingNo', align: 'left', disablePadding: false, label: 'Item No.' },
  { id: 'iron', align: 'left', disablePadding: false, label: 'Total As Per Previous Bill ' },
  { id: 'calories', align: 'left', disablePadding: false, label: 'Since Previous Bill' },
  { id: 'fats', align: 'left', disablePadding: false, label: 'Total Up To Date' },
  { id: 'name', align: 'left', disablePadding: true, label: 'Items Of work supplies', width: '40%' },
  { id: 'fat', align: 'left', disablePadding: false, label: 'Tender Quantity/Sanctioned Quantity/Unit' },
  { id: 'carbs', align: 'left', disablePadding: false, label: 'Quantity(UpTp Date)' },
  { id: 'protein', align: 'left', disablePadding: false, label: 'Amount(UpTo Date)' },
  { id: 'alpha', align: 'left', disablePadding: false, label: 'Quantity(Previous Paid)' },
  { id: 'beta', align: 'left', disablePadding: false, label: 'Amount(Previous Paid))' },
  { id: 'gyma', align: 'left', disablePadding: false, label: 'Quantity' },
  { id: 'sigma', align: 'left', disablePadding: false, label: 'Since previous bill Rate' },
  { id: 'delta', align: 'left', disablePadding: false, label: 'Amount(Rs)' },
  { id: 'omega', align: 'left', disablePadding: false, label: 'Remark' }
];

const OrderTableHead = ({ order, orderBy }) => (
  <TableHead>
    <TableRow>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.align}
          padding={headCell.disablePadding ? 'none' : 'normal'}
          sortDirection={orderBy === headCell.id ? order : false}
          style={{ width: headCell.id === 4 ? '40%' : 'auto' }}
        >
          {headCell.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

export default function OrderTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    <TableContainer>
      <Table style={{ overflowX: 'auto', maxWidth: '100%' }}>
        <OrderTableHead order={order} orderBy={orderBy} />

        <TableBody>
          {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
            const isItemSelected = isSelected(row.trackingNo);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.trackingNo} selected={isItemSelected}>
                <TableCell component="th" id={labelId} scope="row" align="left">
                  <Link color="secondary" component={RouterLink} to="">
                    {row.trackingNo}
                  </Link>
                </TableCell>
                <TableCell align="left">{row.iron}</TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fats}</TableCell>
                <TableCell align="left" style={{ width: index === 4 ? '40%' : 'auto' }}>
                  {' '}
                  <Typography paragraph style={{ whiteSpace: 'normal' }}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Stack direction="column" spacing={1}>
                    <Typography>{row.fat}</Typography>
                    <hr />
                    <Typography>{row.jira}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">
                  <NumberFormat value={row.protein} displayType="text" thousandSeparator />
                </TableCell>
                <TableCell align="left">{row.alpha}</TableCell>
                <TableCell align="left">{row.beta}</TableCell>
                <TableCell align="left">{row.gyma}</TableCell>
                <TableCell align="left">{row.sigma}</TableCell>
                <TableCell align="left">{row.delta}</TableCell>
                <TableCell align="left">{row.omega}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
