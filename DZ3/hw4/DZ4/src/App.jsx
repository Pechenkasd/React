import {useState , useLayoutEffect} from 'react'
import MainPage from './pages/mainPage/MainPage'
import ErrorPage from './pages/errorPage/ErrorPage'

const App = () => {
  const [user, setUser] = useState()
  const [page, setPage] = useState('')

 useLayoutEffect(() => {
      const name = prompt('Введите ваше имя:')
      const lastname = prompt('Введите вашу фамилию:')
      const newUser = { name, lastname }
      setUser(newUser)

      if (name === 'Jonn' && lastname === 'Jonns') {
        setPage(<MainPage user={newUser} />)
      } else {
        setPage(<ErrorPage user={newUser} />)
      }
  }, [])
  return (
    <div>
      {page}
    </div>
  );
};

export default App
