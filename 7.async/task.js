class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  
  addClock(setTime, action) {
    if (!setTime || !action) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.findIndex((value) => {
        value.time === setTime;
      }) >= 0) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback() {return action()}, 'time': setTime, 'canCall': true});
    console.log(this.alarmCollection);
  }

  removeClock(timeForDelete) {
    let alarmColectionDelete = this.alarmCollection.filter((value) =>{
      return value.time !== timeForDelete;
    });
     return this.alarmCollection = alarmColectionDelete;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0,-3); 
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
          item.canCall = false;
          return item.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => {
      item.canCall = true;
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}