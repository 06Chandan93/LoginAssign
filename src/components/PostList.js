import React from 'react';
import { connect } from "react-redux";
import { posts } from '../store/reducers/postReducer';
import PostDetail  from "./PostDetail";

class PostList extends React.Component{
  render(){
    const posts=this.props.posts;
    return(
      <div className="container">
      <div className="row">

        <table class="responsive-table">
         <thead>
           <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Gender</th>
               <th>Email</th>
               <th>PhoneNo</th>
           </tr>
         </thead>
<tbody>
      {posts && posts.map(post=><PostDetail post={post} key={post.id}/>)}
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}

const mapStatetoProps=(state)=>{

return{
  posts:state.posts,
}
}

export default connect(mapStatetoProps)(PostList);
