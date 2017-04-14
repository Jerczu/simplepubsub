import {pubsub} from '../pubsub/pubsub';

export const button = {

  button: document.createElement('button'),

  init:function () {
    this.button.addEventListener('click',this.handleclick);
    this.button.textContent = "Click Me"
    document.body.appendChild(this.button);
  },

  handleclick:function (event) {
    pubsub.emit('buttonClicked',null);
  }

}
