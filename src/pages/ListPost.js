import React from "react";
import useStores from "components/useStores";
import {
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ReactMarkdown from "react-markdown";
import axios from 'axios'

import { observer, inject } from "mobx-react";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Image(props) {
  return <img {...props} style={{maxWidth: '100%'}} />
}

function MakePostList(props){

  return props.posts.map(post => {

    return <div>
      <ReactMarkdown
          source={post}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `https://raw.githubusercontent.com/NoelBird/TIL/master/2020-09/${uri}`}
            renderers={{image: Image}}
            />

  <Divider />
      </div>
  })
  
}

@inject("postStore")
@observer
class ListPost extends React.Component{
  render(){
    const classes = styles
    if(this.props.postStore.postMarkdownList.length === 0){
      this.props.postStore.getPostList()
      this.props.postStore.getMarkdownList()
      
    }
    this.props.postStore.getMarkdownList()
    

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <MakePostList posts={this.props.postStore.postMarkdownList}/>
          
        <br />
        <br />
        <h3>오늘 한 일(2020-09-07)</h3>
        <ul>
          <li>index page에서 mobx store 설정</li>
          <li>markdown으로 보기 지원</li>
        </ul>
        
        <br />

        <h3>해야 할 일</h3>
        <ul>
          <li>markdown style 입히기</li>
          <li>markdown으로 작성된 글들의 리스트 나열하는 기능!</li>
          <li>웹페이지에서 글 쓰면 바로 깃에 커밋되게 만들기</li>
          <li>로그인 페이지</li>
          <li>포트폴리오 페이지 연결</li>
          <li>noelbird.kr은 noelbird.github.io에 연결하기</li>
          <li>글 쓰기 페이지, 글 보기 페이지(CRUD)</li>
        </ul>
        </Container>
        
      </div>
    )
  }
}

export default withStyles(styles)(ListPost)