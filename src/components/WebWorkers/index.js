import React from 'react';
import {longTask} from './longTask';

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
      <div>{'Первый инпут без воркера'}</div>
      <input onClick={handleClickFirst}></input>
      <div>{'Второй с воркером'}</div>
      <input onClick={handleClickSecond}></input>
    </div>
  )
}

export default WebWorkers