import { useEffect } from 'react';
import { initialize } from '@nuvemshop/nexo';

export default function Home() {
  useEffect(() => {
    initialize(); // Inicializa o SDK da Nuvemshop pra funcionar no admin
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Olá, lojista da Nuvemshop! 🚀</h1>
      <p>Esse é um app externo simples. Funcionando direitinho!</p>
    </div>
  );
}
