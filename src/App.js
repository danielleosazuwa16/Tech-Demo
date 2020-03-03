import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import SearchAppBar from "./Menu/AppBar";
import ElevationScroll from './Menu/ElevationScroll';
import Table from "./Table";
import { generate } from "shortid";
import { MyForm } from "./MyForm";
import { rows } from "./MockData";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableData: rows
    };
  }

  render() {
    //const tableData: Row[] = rows;

    return (
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...this.props}>
          <SearchAppBar />
        </ElevationScroll>
        <Toolbar />
        <Container fixed>
          <div style={{ textAlign: "center" }}>
            <MyForm onSubmit={d => {
              let data = this.state.tableData;
              data.push({ id: generate(), ...d });
              this.setState({ tableData: data })
            }} />
            <Table data={this.state.tableData} />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}