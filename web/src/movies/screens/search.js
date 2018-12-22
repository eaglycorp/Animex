import React from 'react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/bootstrap3.css';
import '../../assets/css/aa.scss';

import Card from '../../home/components/cards/cardSearch';
import Nav from '../../home/components/nav';

class Search extends React.Component{
    render(){
        return(
            <div>
            <Nav/>
            <article className="card-post">
        <br></br><br></br><br></br>
                <div className="container">
                    <div className="row">
                    <Card name={this.props.match.params.nama}/>
                    </div>
                </div>
            </article>

            </div>
        )
    }
}

export default Search;