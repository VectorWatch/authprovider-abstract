/**
 * @param storageProvider {StorageProviderAbstract}
 * @constructor
 */
function AuthProviderAbstract(storageProvider) {
    this.storageProvider = storageProvider;
    this.protocol = 'generic';
    this.version = '1.0';
}

/**
 * Returns the storage provider used to store the auth data
 * @returns {StorageProviderAbstract}
 */
AuthProviderAbstract.prototype.getStorageProvider = function() {
    return this.storageProvider;
};

/**
 * Returns a promise of auth tokens
 * @param credentials {Object}
 * @returns {Promise<Object>}
 */
AuthProviderAbstract.prototype.getAuthTokensAsync = function(credentials) {
    throw new Error('Not implemented.');
};

AuthProviderAbstract.prototype.refreshAuthTokensAsync = function(credentialsKey) {
    throw new Error('Not implemented.');
};

/**
 * Returns the credentials key based on credentials object
 * @param credentials {Object}
 * @returns {String}
 */
AuthProviderAbstract.prototype.getCredentialsKey = function(credentials) {
    throw new Error('Not implemented.');
};

/**
 * Returns a promise of a login url used to authenticate on an external service
 * @returns {Promise<String>}
 */
AuthProviderAbstract.prototype.getLoginUrlAsync = function() {
    throw new Error('Not implemented.');
};

/**
 * Returns the protocol used to authenticate
 * @returns {String}
 */
AuthProviderAbstract.prototype.getProtocol = function() {
    return this.protocol;
};

/**
 * Returns the version of the protocol used to authenticate
 * @returns {String}
 */
AuthProviderAbstract.prototype.getVersion = function() {
    return this.version;
};

module.exports = AuthProviderAbstract;