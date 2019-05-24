'use strict';

const e = React.createElement;

class contactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>You can contact me on <a href="">github</a>, <a href="">linkedin</a> or by <a href="">mail</a>.</p>;
  }
}

const domContainer = document.querySelector('#content');
ReactDOM.render(e(contactPage), domContainer);