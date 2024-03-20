import httpStatus from '~/constants/httpStatus'
import { MESSAGE_STATUS } from '~/constants/messageStatus'

type ErrorsType = Record<string, { msg: string; [key: string]: any }>

export class ErrorWithStatus {
  message: string
  status: number

  constructor({ message, status }: { message: string; status: number }) {
    this.message = message
    this.status = status
  }
}

export class EntityError extends ErrorWithStatus {
  errors: ErrorsType

  constructor({ message = MESSAGE_STATUS.VALIDATION_ERROR, errors }: { message?: string; errors: ErrorsType }) {
    super({ message, status: httpStatus.UNPROCESSABLE_ENTITY })
    this.errors = errors
  }
}
