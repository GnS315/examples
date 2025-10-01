import React from 'react';
import {longTask} from './longTask';

/*
* В данном примере есть два инпута, по клику выполняется некоторая операция
* Первый инпут заблокирует взаимодействие со страницей на время выполнения этой операции
* Второй импут выполнит ее в воркере, а мы в это время можем продолжать взаимодействовать со страницей
* */
const WebWorkers = () => {
  const worker = new Worker(new URL('./worker.js', import.meta.url))

  const handleClickFirst = () => {
    console.log('Полностью блокируем взаимодействие со страницей')
    longTask()
  }

  const handleClickSecond = () => {
    console.log('Задача выполняется в воркере, страница не заблокирована')
    worker.postMessage('start')
  }


  return (
    <div style={{padding: 10}}>
      <hr />
      <h1>{'Воркеры'}</h1>
      <div>{'Первый инпут без воркера'}</div>
      <input onClick={handleClickFirst} placeholder={'Кликни'}></input>
      <div>{'Второй с воркером'}</div>
      <input onClick={handleClickSecond} placeholder={'Кликни'}></input>
    </div>
  )
}

export default WebWorkers