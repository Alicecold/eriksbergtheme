'use strict';

const e = React.createElement;

class aboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>This is an about me page</p>;;
  }
}

const domContainer = document.querySelector('#content');
ReactDOM.render(e(contactPage), domContainer);