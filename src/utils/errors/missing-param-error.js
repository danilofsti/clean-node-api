module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing parm: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
