module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var blueprint = this;

    return blueprint.addBowerPackageToProject('pusher', '3.1.0').then(function() {
      return blueprint.addBowerPackageToProject('pusher-test-stub', '1.0.0');
    });
  }
};
