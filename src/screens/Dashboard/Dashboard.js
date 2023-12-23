import React, { Fragment, PureComponent } from 'react';
import { Row, Card, FormGroup, Col, Input, Label, Button } from 'reactstrap';
// import {
//   fetchCustomer,
//   searchCustomer,
//   changeStatusCustomer,
//   filterCustomer,
// } from "../redux/actions/customers/customersAction";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Dashboard extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // const { customers } = this.props.customer;
    const CustomerLists = (
      <Fragment>
        <h6>Dashobaord ccc</h6>
        <Card>
          <div>
            {/* <Row>
              <Col sm="12">
                <div className="aucionlist_filters">
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <Label for="exampleSelect">Search Customers</Label>
                        <Input
                          name="firstName"
                          placeholder="Phone Number / Name"
                          onChange={this.onChange}
                        ></Input>
                      </FormGroup>
                    </Col>

                    <Col sm="2">
                      <div>&nbsp;</div>
                      <Button onClick={this.onSearchCustomer} color="primary">
                        Search
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="3">
                      <FormGroup>
                        <Label for="exampleSelect">From Date</Label>
                        <Input
                          type="date"
                          id="fromDate"
                          name="fromDate"
                          data-toggle="tooltip"
                          data-trigger="hover"
                          data-placement="top"
                          data-title="Date Opened"
                          onChange={this.onChangeDateTime}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="3">
                      <FormGroup>
                        <Label for="exampleSelect">To Date</Label>
                        <Input
                          type="date"
                          id="toDate"
                          name="toDate"
                          data-toggle="tooltip"
                          data-trigger="hover"
                          data-placement="top"
                          data-title="Date Opened"
                          onChange={this.onChangeDateTime}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm="2">
                      <div>&nbsp;</div>
                      <Button onClick={this.onFilterDate} color="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row> */}
            <div className="auctionlist_content">
              <Col sm="12"></Col>
            </div>
          </div>
        </Card>
      </Fragment>
    );

    return <Fragment>{CustomerLists}</Fragment>;
  }
}

const mapStateToProps = (state) => ({
  // customer: state.customerData.customers,
});

// export default compose(
//   withRouter,
//   connect(mapStateToProps, {
//     // fetchCustomer, searchCustomer, changeStatusCustomer, filterCustomer
//   })
// )(Dashboard);

export default Dashboard;
