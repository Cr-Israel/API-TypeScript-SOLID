import { Router } from 'express'
import { createUserController } from './use-cases/User/CreateUser'

const router = Router()

router.post('/users', async (request, response) => {
  return await createUserController.handle(request, response)
})

export { router }
