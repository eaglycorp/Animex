import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Jumbotron,
    Container,
    Row, 
    Col} from 'reactstrap';

//import {CardBanner} from '../components/cards'

class LandingPage extends Component{
    render(){
        return(
            <div>
            <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <h1>PAGE NOT FOUND</h1>
                </Col>
              </Row>
            </Container>
            </Jumbotron>
            </div>
        )
    }
}

const stateToProps = (state)=>{
    return{
        counter: state.counter
    }
}

export default connect (stateToProps)(LandingPage);