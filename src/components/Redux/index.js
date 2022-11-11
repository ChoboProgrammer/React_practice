const {createStore} = require('redux')

const reducer = (prevState,action) =>{
  //스테이트 만들어주기.
  // 문제점 ? 
  //reducer의 케이스가 엄청 길어지겠꾸나! 
  // Action도 엄청 많아질거같은데..
  switch(action.type){
    case 'CHANGE_COMP_A':
      //State의 불변성을 지켜줘야한다.
      return{
        ...prevState,
        compA:action.data,
      };
      //오타났을 때, 에러상황일때, 영향력이 없게끔 해준다.
      default:{
        return prevState
      }
  }
}
const initialState = {
  compA:12,
  compB:"a",
  compC:null,
}

const store = createStore(reducer,initialState)

console.log(store.getState());
// action은 객체이다.
// 확장성을 얻기위해서, 객체를 Return하는 형식으로 함수를 만들면 좋다. 추상화 ==> 모듈화 
// 따라서, Action은 함수로 많이 작성한다. Action Creater라고 부르기도 하는데, Action의 확장성을 위해서 함수로 만든거일뿐임. 
const changeCompA = (data) =>{
  return {
    type:"CHANGE_COMP_A",
    data,
  }
};

store.dispatch(changeCompA('b'));