import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss/scsstest.scss';

class Scsstest extends Component {
    render() {
        return (<div>
            <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://www.prepostseo.com/imgs/tools/social-img/reverse-image-search.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
      <div className="zoo"><h3>Go To The Zoo</h3>
      <p className="zoo-p">sth better</p>
      <div className="zoo-div-center">
        <div className="zoo-div-content"><p className="zoo-p-center">
          sth
          </p>
          <p>đây cũng là sth</p>
          <h4>STHHH</h4>
          </div>
      </div>
      </div>
      </div>
        )
    }
}
const mapStateToProps = ({}) => ({
        
  })
  const mapDispatchToProps = dispatch => ({
 
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Scsstest);