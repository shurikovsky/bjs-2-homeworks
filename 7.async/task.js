class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  
  addClock(setTime, callback) {
    if (!setTime || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some((value) =>
        value.time === setTime
      )) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback, time: setTime, canCall: true});
  }

  removeClock(timeForDelete) {
    this.alarmCollection = this.alarmCollection.filter((value) =>
      value.time !== timeForDelete
    );
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
          item.callback();
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