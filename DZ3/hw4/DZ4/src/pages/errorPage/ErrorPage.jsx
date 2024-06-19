import { useState ,useLayoutEffect} from "react";


const ErrorPage = ({ user }) => {
  const [userData, setUserData] = useState({ name: '', lastname: '' })

  useLayoutEffect(() => {
    setUserData(user)
  }, [user])

  return (
    <div>
      <h1>Тебе сюда нельзя - {userData.name} {userData.lastname}</h1>
    </div>
  )
}

export default ErrorPage