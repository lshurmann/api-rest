import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { z } from "zod"

class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required!" })
        .trim()
        .min(3, { message: "Name must be 6 or more characters!" }),
      price: z
        .number({ required_error: "Price is required" })
        .positive({ message: "Price must be positive!" })
        .gte(1),
    })

    const { name, price } = bodySchema.parse(request.body)

    /*
    if (!name) {
      throw new AppError("Nome obrigatório!")
    }

    if (name.trim().length < 4) {
      throw new AppError(
        "O nome do produto precisa ter pelo menos 6 caracteres!"
      )
    }

    if (!price) {
      throw new AppError("Preço obrigatório!")
    }

    if (price <= 0) {
      throw new AppError("O preço do produto não ser menor ou igual a zero!")
    }
    */

    response.status(201).json({ name, price, user_id: request.user_id })
  }
}

export { ProductsController }
