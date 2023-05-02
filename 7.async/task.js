class AlarmClock {
    constructor(intervalId=null,alarmCollection=[]) {
      this.alarmCollection=alarmCollection;
      this.intervalId=intervalId;
    }
    addClock(time,func) {
      if (time===null || func===undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
      } 
        if (this.alarmCollection.some(item => item.time===time)) {
          console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback: func,time: time,canCall:true});
    }
    removeClock(time) {
      this.alarmCollection=this.alarmCollection.filter(item => item.time!==time );
    }
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    start() {
      if (this.intervalId) {
        return;
      }
        this.intervalId=setInterval(() => {
          this.alarmCollection.forEach(item => {
        if (item.time===this.getCurrentFormattedTime() && item.canCall===true) {
          item.canCall=false;
          item.callback();
      } 
      })
        });
  }
    stop() {
      clearInterval(this.intervalId);
      this.intervalId=null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach(item => item.canCall=true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection=[];
    }
  }
