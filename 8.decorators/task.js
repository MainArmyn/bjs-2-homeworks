function cachingDecoratorNew(func) {
    let cashe={};
    let count=0;
    return (...args) => {
      const hash=args.join(',');
      if (count===5) {
        delete cashe[Object.keys(cashe)[0]];
        if (hash in cashe) {
            console.log(Object.keys(cashe));
            return "Из кэша: "+cashe[hash];
          }
        const result=func(...args);
        count-=1;
        cashe[hash]=result;
        console.log(Object.keys(cashe));
        return "Вычисляем: "+result;
      } 
      if (hash in cashe) {
        console.log(Object.keys(cashe));
        return "Из кэша: "+cashe[hash];
      }
      const result=func(...args);
      cashe[hash]=result;
      count+=1;
      console.log(Object.keys(cashe));
      return "Вычисляем: "+result;
    }
  }
  function debounceDecoratorNew(func,delay) {
    let isThrottled=false;
    function wrapper(...args) {
      wrapper.allCount+=1;
      if (isThrottled) {
        return;
      }
      let result=func(...args);
      wrapper.count+=1;
      isThrottled=true;
      setTimeout(() => isThrottled=false,delay);
      return result;
    }
    wrapper.count=0;
    wrapper.allCount=0;
    return wrapper;
  }
