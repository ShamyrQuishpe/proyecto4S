import { Router } from 'express'
import { getAllReportsController, createReportsController, getReportByIdController } from '../controllers/report_controller.js'

const router = Router()


router.get('/reports', getAllReportsController)
router.post('/reports', createReportsController)
router.get('/reports/:id', getReportByIdController)
export default router