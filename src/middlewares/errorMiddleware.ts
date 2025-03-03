import express from "express"
import { ZodError } from "zod"

export const errorHandler: express.ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  if (error instanceof ZodError) {
    response
      .status(400)
      .json({ message: "Validation error!", issues: error.format() })
    return
  }

  response.status(500).json({ message: error.message })
  return undefined
}
