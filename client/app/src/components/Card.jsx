import React from 'react';
// import * from './../../node_modules/materialize/css';
// import * from './../../node_modules/materialize-css/dist';
// require("./../../node_modules/materialize-css/dist/css/materialize.css");
// require("./../../node_modules/materialize-css/dist/");

const Card = (props) => (
  <div className="row">
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="images/office.jpg"></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
          <p><a href={props.link}>{props.link}</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Card text</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;