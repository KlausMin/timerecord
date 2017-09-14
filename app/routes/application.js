import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    stamp(){
      this.str.pushObject(new Date());
    }
  },
  model(){
    this.str = [];
    return this.str;
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set("currentTime", new Date());
  }
});
