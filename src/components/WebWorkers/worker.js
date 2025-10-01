import {longTask} from "./longTask";

onmessage = (e) => {
  if (e.data === 'start') {
    longTask()
  }
}