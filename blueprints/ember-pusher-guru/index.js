module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addBowerPackageToProject('pusher-test-stub', '2.0.0');
    return this.addBowerPackageToProject('pusher', '3.0.0');
  }
};
