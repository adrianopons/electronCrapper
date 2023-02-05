import React, { useState } from 'react';

const Form = () => {
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    // insira a lógica da sua função getData aqui
    setLoading(false);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      getData();
    }}>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <button type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default Form;
