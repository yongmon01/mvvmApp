import './App.css';
import {useState} from 'react'

function Test (props) {
  const {viewModel} = props
  let users = [{name: 'a', email: 'a'}, {name: 'b', email: 'c'}]
  const [renderFlag, setRenderFlag] = useState(true)

  // const remove = idx => {
  //   viewModel.remove(idx)
  //   setRenderFlag(!renderFlag)
  // }

  return (
    <div>
      <div>
        <input type="text" placeholder ="검색"/>
        {/* <button className="read">검색</button> */}
        <button className="create">등록</button>
      </div>
      <div className="list">
        <ul>
          {users.map( (user, idx) => (
              <li key={idx}>
                <span>{user.name}-[{user.email}]</span>
                <button 
                  // onClick={() => remove(idx)}
                  style={{color: 'red'}}
                >
                  삭제
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  
  const model = new Model()
  const viewModel = new ViewModel(model)

  return (
    <>
      <Test
        viewModel = {viewModel}
      />
    </>
  )
}

export default App;