import Ember from 'ember';

export default Ember.Route.extend({
  timeList: [],
  actions: {
    stamp(){
      this.timeList.pushObject(new Date());
      this.refresh();
    },
    erase(index){
      this.timeList.removeObject(this.timeList[index]);
    }
  },
  model(){
    return new Date();
  },
  setupController(controller, model){
    this._super(controller, model);
    controller.set("timeArray", this.timeList);
  }
});
