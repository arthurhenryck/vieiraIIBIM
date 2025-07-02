import { useState } from 'react';
import './App.css';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [materia, setMateria] = useState('');
  const [busca, setBusca] = useState('');

  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const materias = ['Matemática', 'História', 'Física', 'Biologia', 'Química'];

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!titulo || !descricao || !diasSelecionados.length || !materia) return;

    const novaTarefa = {
      titulo,
      descricao,
      dias: diasSelecionados,
      materia,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTitulo('');
    setDescricao('');
    setDiasSelecionados([]);
    setMateria('');
  };

  const alternarDia = (dia) => {
    setDiasSelecionados((prev) =>
      prev.includes(dia)
        ? prev.filter((d) => d !== dia)
        : [...prev, dia]
    );
  };

  const alternarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const tarefasFiltradas = tarefas.filter((tarefa) =>
    tarefa.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Checklist de Estudos</h1>

      <input
        className="search-bar"
        type="text"
        placeholder="Buscar por título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <form onSubmit={adicionarTarefa} className="task-form">
        <input
          type="text"
          placeholder="Título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <div className="day-selector">
          {diasDaSemana.map((dia) => (
            <label key={dia}>
              <input
                type="checkbox"
                checked={diasSelecionados.includes(dia)}
                onChange={() => alternarDia(dia)}
              />
              {dia}
            </label>
          ))}
        </div>
        <select
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        >
          <option value="">Selecione a matéria</option>
          {materias.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <button type="submit">Adicionar Tarefa</button>
      </form>

      <div className="task-list">
        {tarefasFiltradas.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          tarefasFiltradas.map((tarefa, index) => (
            <div
              className={`task-item ${tarefa.concluida ? 'done' : ''}`}
              key={index}
            >
              <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => alternarConcluida(index)}
              />
              <div>
                <strong>{tarefa.titulo}</strong>
                <p>{tarefa.descricao}</p>
                <small>Dias: {tarefa.dias.join(', ')}</small> |{' '}
                <small>Matéria: {tarefa.materia}</small>
              </div>
              <button onClick={() => removerTarefa(index)}>🗑</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
