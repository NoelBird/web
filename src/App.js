import React from 'react';

class Test extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      val:""
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler = (e) => {
    this.setState({val: e.target.value})
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.onChangeHandler} /><br />
        {this.state.val}
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
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <Test />
    </div>
  );
}

export default App;
