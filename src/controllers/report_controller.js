import reportModel from "../models/reports.js";

const getAllReportsController = async (req, res) => {
    try{
        const reports = await reportModel.getAllReportsModel()
        res.status(200).json(reports)
    }catch(error){
        res.json(error)
    }
}

export{
    getAllReportsController
}