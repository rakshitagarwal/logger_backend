exports.response = (message, code, data) => {
  return {
    message,
    code,
    data
  }
}

exports.DTO_OBJECT = {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
    }
  }
}
