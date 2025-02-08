import type { ErrorCode } from './Error.types';

export class AppError extends Error {
  constructor(public code: ErrorCode) {
    super(code);
    this.name = 'AppError';
  }
}
