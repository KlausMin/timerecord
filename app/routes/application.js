import Ember from 'ember';

export default Ember.Route.extend({
  timeList: [],
  actions: {
     stamp(){
       this.timeList.pushObject(new Date());
       this.refresh();
     },
     erase(list){
       this.timeList.removeObject(list);
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
