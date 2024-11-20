import { randomUUID } from "crypto"
import { NextFunction, Request, Response } from "express"

export default function myMiddleware(
  request: Request,
  _response: Response,
  next: NextFunction
) {
  request.user_id = randomUUID()

  return next()
}
