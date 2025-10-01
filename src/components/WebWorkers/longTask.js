export const longTask = () =>  {
  const endTime = Date.now() + 3000; // Задержка на 3 секунды
  while (Date.now() < endTime) {
    // Очень долго что-то вычисляем и блокируем взаимодействие
  }
  console.log('Закончилось выполнение задачи')
}