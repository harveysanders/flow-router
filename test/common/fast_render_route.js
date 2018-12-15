import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FastRenderColl = new Mongo.Collection('fast-render-coll');

FlowRouter.route('/the-fast-render-route', {
  subscriptions() {
    this.register('data', Meteor.subscribe('fast-render-data'));
  }
});

FlowRouter.route('/the-fast-render-route-params/:id', {
  subscriptions(params, queryParams) {
    this.register('data', Meteor.subscribe('fast-render-data-params', params, queryParams));
  }
});

FlowRouter.route('/no-fast-render', {
  subscriptions() {
    if(Meteor.isClient) {
      this.register('data', Meteor.subscribe('fast-render-data'));
    }
  }
});

var frGroup = FlowRouter.group({
  prefix: '/fr'
});

frGroup.route('/have-fr', {
  subscriptions() {
    this.register('data', Meteor.subscribe('fast-render-data'));
  }
});
