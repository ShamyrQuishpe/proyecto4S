import reportModel from "../models/reports.js";
import {v4 as uuidv4} from "uuid"


const getAllReportsController = async (req, res) => {
    try{
        const reports = await reportModel.getAllReportsModel()
        res.status(200).json(reports)
    }catch(error){
        res.json(error)
    }
}

const createReportsController = async(req, res) => {
    try{
        const newReportData = {
            id:uuidv4(),
            ...req.body
        }

        const report = await reportModel.createReportModel(newReportData)
        res.status(201).json(report)

    }catch(error){
        console.log(error)
    }
}

const getReportByIdController = async(req,res) => {
    const {id} = req.params
    try{
        const report = await reportModel.getReportByIDModel(id)
        const status = report.error ? 404 : 200
        res.status(status).json(report)
    }catch(error){
        res.status(501).json({msg:error})
    }
}

export{
    getAllReportsController, createReportsController, getReportByIdController
}