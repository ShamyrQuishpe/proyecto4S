import { Router } from 'express'
import { getAllReportsController } from '../controllers/report_controller.js'

const router = Router()


router.get('/reports', getAllReportsController)

export default router