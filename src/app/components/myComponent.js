class MyComponentController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const myComponent = {
  template: require('./myComponent.html'),
  controller: MyComponentController
};

