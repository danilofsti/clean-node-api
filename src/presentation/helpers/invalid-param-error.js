module.exports = class InvalidParamError extends Error {
  constructor (paramName) {
    super(`Invalid parm: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
