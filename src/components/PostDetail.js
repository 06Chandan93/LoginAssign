import React from "react";
import {connect} from "react-redux";

class PostDetail extends React.Component {

render(){

  return (
 <tr>
           <td>{this.props.post.name}</td>
           <td>{this.props.post.age}</td>
           <td>{this.props.post.gender}</td>
           <td>{this.props.post.email}</td>
           <td>{this.props.post.phoneNo}</td>
         </tr>
  );
}
}



export default PostDetail;
