import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Post1 from './Post.1'

class PostList1 extends Component {
  render() {
    return (
      <div style={{marginTop: '24px'}}>
        {this.props.posts.map((item, i) => {
            return <Post1 post={item} key={i} onRemove={this.props.removeMediaUpdate}/>
          })
        }
      </div>
    )
  }
}
PostList1.propTypes = {
  posts: PropTypes.array.isRequired,
  removeMediaUpdate: PropTypes.func.isRequired
}
export default PostList1
