import React from 'react';

class HelloWorld  extends React.Component {
  render() {
    return (<div>
        Hello {this.props.name} !
      </div>)
  }
}

HelloWorld.propTypes = {
  name: React.propTypes.string
};

HelloWorld.defaultProps = {
  name: 'World'
}

export default HelloWorld;
