import {useState }from 'react'
import { useForm } from "react-hook-form"

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
    const [users, setUsers] = useState([]);
    const submit = ((values)=>{
        setUsers([...users, values]);
        reset()
    })
    const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
      };
    const clearTable = () => {
    setUsers([]);
  };
  return (
    <>
    <form onSubmit={handleSubmit(submit)} >
      <label >
        <input 
          type="text" 
          placeholder="name" 
          {...register("name", {required: true,maxLength: 20})} />
          {errors.name && <span>Введите имя</span>}
      </label>
      <label>
        <input 
          type="text" 
          placeholder="username" 
          {...register("username", {required:  "Введите фамилию"})} />
          {errors.username && <span>Введите фамилию </span>}
      </label>
      <label >
        <input 
          type="email" 
          placeholder="email" 
          {...register("email", {required: true})} />
          {errors.email && <span>Введите email</span>}
      </label>
      <label >
        <input 
          type='tel'
          placeholder="phone" 
          {...register("phone", {required:"Обязательное поле для ввода", valueAsNumber: true })} />
          {errors.phone && <span>{errors.phone.message}</span>}
      </label>
      <label >
        <input 
          type='url'
          placeholder="website" 
          {...register("website")} />
      </label>
            <button type="submit">Создать</button>
            <button type="button" onClick={clearTable}>Очистить таблицу</button>
    </form>
        {users.length === 0 ? (
        <p>Таблица пуста</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => deleteUser(index)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
