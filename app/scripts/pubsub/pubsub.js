export const pubsub = {
  subscribed:{},

  subscribe:function(eventname,callback,key){
    let callbackObj = {};
    callbackObj[key] = callback;
    this.subscribed[eventname] = this.subscribed[eventname] || [];
    this.subscribed[eventname].push(callbackObj);
  },

  unsubscribe:function (eventname,key) {
    if(this.subscribed[eventname]){
      for (let i = 0; i < this.subscribed[eventname].length; i++) {
        let callbackObj = this.subscribed[eventname][i];
        if(typeof callbackObj[key] !== 'undefined'){
          this.subscribed[eventname].splice(i,1);
          break;
        }
      }
    }

  },

  emit:function(eventname,data){
    if(this.subscribed[eventname]){
      this.subscribed[eventname].forEach(function (cb) {
        let val = Object.values(cb);
        if(typeof val[0] === 'function'){
          val[0](data);
        }
      })
    }
  }
};
