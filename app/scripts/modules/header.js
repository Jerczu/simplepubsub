import {pubsub} from '../pubsub/pubsub';

export const header = {
  header:null,
  counter:0,
  init:function () {
    this.header = document.getElementById('headertext');
    this.header.textContent = "Button Hasn't Been Clicked Yet";
    this.listen();
  },

  listen:function () {
    pubsub.subscribe('buttonClicked',this.handlePubSubEvent.bind(this),'header');
  },

  handlePubSubEvent:function(data){
    this.counter ++;
    let suffix = (this.counter > 1)?"s":"";
    this.header.textContent = "Button has been clicked "+this.counter+" time"+suffix;
    if(this.counter >9){
      this.destroy();
    }
  },

  destroy:function () {
    console.log("UNSUBSCRIBE!")
    pubsub.unsubscribe('buttonClicked','header')
  }
}
