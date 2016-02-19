function AuthProviderAbstract(storageProvider) {
    this.storageProvider = storageProvider;
    this.protocol = 'generic';
    this.version = '1.0';
}

AuthProviderAbstract.prototype.getStorageProvider = function() {
    return this.storageProvider;
};

AuthProviderAbstract.prototype.getAuthTokensAsync = function(credentials) {
    throw new Error('Not implemented.');
};

AuthProviderAbstract.prototype.getCredentialsKey = function(credentials) {
    throw new Error('Not implemented.');
};

AuthProviderAbstract.prototype.getLoginUrlAsync = function() {
    throw new Error('Not implemented.');
};

AuthProviderAbstract.prototype.getProtocol = function() {
    return this.protocol;
};

AuthProviderAbstract.prototype.getVersion = function() {
    return this.version;
};

module.exports = AuthProviderAbstract;