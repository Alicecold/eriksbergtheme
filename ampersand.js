'use strict';

const e = React.createElement;

class morePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>This is a more page</p>;;
  }
}

const domContainer = document.querySelector('#content');
ReactDOM.render(e(contactPage), domContainer);