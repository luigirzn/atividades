import React, { useState } from 'react';
import ListItem from './ListItem';

const Lista = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <h1>Lista de Itens</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Digite um item..."
      />
      <button onClick={handleAddItem}>Adicionar</button>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Lista;
