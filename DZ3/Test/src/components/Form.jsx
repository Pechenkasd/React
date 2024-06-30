import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Modal from './Modal/Modal';


const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const submit = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/users', values);
      setMessage('Пользователь успешно создан');
      setIsModalOpen(true);
      setUsers([...users, response.data]);
      reset();
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  const deleteUser = async (index, id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      setMessage('Пользователь удален');
      setIsModalOpen(true);
      setUsers(users.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const clearTable = () => {
    setUsers([]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('');
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input
            type="text"
            placeholder="name"
            {...register('name', { required: true, maxLength: 20 })}
          />
          {errors.name && <span>Введите имя</span>}
        </label>
        <label>
          <input
            type="email"
            placeholder="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Введите email</span>}
        </label>
        <label>
          <input
            type="text"
            placeholder="username"
            {...register('username', { required: 'Введите фамилию' })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </label>
        <button type="submit">Создать</button>
        <button type="button" onClick={clearTable}>Очистить таблицу</button>
      </form>
      {isModalOpen && <Modal message={message} onClose={closeModal} />}
      {users.length === 0 ? (
        <p>Таблица пуста</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(index, user.id)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Form;

