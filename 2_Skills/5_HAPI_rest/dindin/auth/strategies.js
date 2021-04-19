
const validateAuthorizationHeader = (decoded, req) => {
    console.log(decoded);
    return { isValid: true, credentials: { user: decoded.fullName } };
};

module.exports = {
    validateAuthorizationHeader
}