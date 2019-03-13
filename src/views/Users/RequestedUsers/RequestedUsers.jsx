import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, email, phone, title, groupno, hospital) {
  id += 1;
  return { id, name, email, phone, title, groupno, hospital };
}

const rows = [
  createData(
    "James1",
    "james1@yahoo.com",
    112234567,
    "MD",
    "g-1100",
    "City Hospital,John Hockins"
  ),
  createData(
    "Edison1",
    "edison1@yahoo.com",
    112244567,
    "DO",
    "g-1000",
    "City Hospital,John Hockins"
  ),
  createData(
    "Pascal",
    "pascal@gmail.com",
    112244567,
    "MD",
    "g-1001",
    "City Hospital,John Hockins"
  ),
  createData(
    "George",
    "geroge@gmail.com",
    112244567,
    "MD",
    "g-1001",
    "City Hospital,John Hockins"
  ),
  createData(
    "Steve",
    "steve@gmail.com",
    112244567,
    "DO",
    "g-1001",
    "City Hospital,John Hockins"
  )
];

class SimpleTable extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone No.</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Group Number</TableCell>
              <TableCell align="right">Hospital or Clinic</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.groupno}</TableCell>
                <TableCell align="right">{row.hospital}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
