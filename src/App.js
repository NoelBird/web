import React from 'react';
import useStores from "./components/useStores";
import {
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

function Test(props){
    const {testStore} = useStores()
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Space
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
        <br />
        <br />
        <h3>오늘 한 일</h3>
        <ul>
          <li>react 프로젝트 만들어서 github page연결</li>
          <li>mobx 설치</li>
          <li>material-ui 설치</li>
        </ul>
        <br />

        <h3>해야 할 일</h3>
        <ul>
          <li>index page에서 mobx store 설정</li>
          <li>웹페이지에서 글 쓰면 바로 깃에 커밋되게 만들기</li>
          <li>로그인 페이지</li>
          <li>포트폴리오 페이지</li>
          <li>noelbird.kr은 noelbird.github.io에 연결하기</li>
          <li>글 쓰기 페이지, 글 보기 페이지(CRUD)</li>
        </ul>
        </Container>
        
      </div>
    )
}

function App() {
  return (
    <div className="App">
        <Test />
    </div>
  );
}

export default App;
