import React from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './initial-data';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  const onDragEnd = () => {

  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {initialData.columnOrder.map(columnId => {
      const column = initialData.columns[columnId];
      const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />
    })}
    </DragDropContext>
  );
}

export default App;
