var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div>
      <h2>Navigation component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
      <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
    </div>
  );
}

module.exports = Navigation;
