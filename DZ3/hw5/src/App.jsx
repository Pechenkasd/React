import {useState} from 'react'
import './index.css'


const App = () => {
   const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleAdd = () => {
    if (name.trim() !== '') {
      setNames([...names, name]);
      setName('');
    }
  };

  const handleEdit = (index) => {
    if (name.trim() !== '') {
      const updatedNames = names.map((item, i) => (i === index ? name : item));
      setNames(updatedNames);
      setName('');
    }
  };

  const isAddButtonDisabled = name.trim() === '';
  const isEditButtonDisabled = name.trim() === '';

  return (
    <div className='list'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={handleAdd} disabled={isAddButtonDisabled}>
        Добавить
      </button>
      <div>
        {names.length === 0 ? (
          <p>Список пуст</p>
        ) : (
          <ul>
            {names.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleEdit(index)} disabled={isEditButtonDisabled}>
                  Поменять
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App
