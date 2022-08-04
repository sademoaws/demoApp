import { Row, Col, Button, Card, CardBody, CardHeader } from "reactstrap";
// import PTOModal from "./PTO-Modal";
const Dashboard = () => {
    return (
      <>
        <Row>
          <Col lg="6">
            <Card className="mb-4">
            <CardHeader>
                <h5>Product Title</h5>
              </CardHeader>
              <CardBody>
               <img src={require("./images/Circle.png")} alt="Circle"/>
                <p>Product Description</p>
              </CardBody>
            </Card>

            <Card className="mb-4">
            <CardHeader>
                <h5>Another Product Title</h5>
              </CardHeader>
              <CardBody>
               <img src={require("./images/Square.png")}/>
                <p aria-role="image">Another Product Description</p>
                <img src="foo.png"/>
              </CardBody>
            </Card>



          </Col>

          <Col lg="6">
            <Card className="mb-4">
            <CardHeader>
                <h5>A Final Product Title</h5>
              </CardHeader>
              <CardBody>
               <img src={require("./images/Triangle.png")}/>
                <p>A final Product Description</p>
              </CardBody>
            </Card>





          </Col>


        </Row>
      </>
    );
  };

  export default Dashboard;


                  {/* <img src={require('./images/Circle.png')}/> */}
