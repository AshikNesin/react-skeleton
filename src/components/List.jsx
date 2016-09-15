var React = require('react');
var ListItem = require('./ListItem.jsx');

var names = [{"id":1,"text":"Ashik"},{"id":2,"text":"Nesin"},{"id":3,"text":"Aziz "}];

var List = React.createClass({
  render:function(){
    var listItems = names.map(function(item){
      return <ListItem key={item.id} name={item.text}></ListItem>
    });

    return (<ul>{listItems}</ul>);
  }
})

module.exports = List;
