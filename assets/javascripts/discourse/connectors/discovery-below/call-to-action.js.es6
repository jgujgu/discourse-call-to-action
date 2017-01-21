export default Ember.Component.extend({
  classNames: ['call-to-action'],

  setupComponent(args, component) {
    console.log("setting up component");
  },
  shouldRender(args, component) {
    console.log("rendering component");
  },
});
