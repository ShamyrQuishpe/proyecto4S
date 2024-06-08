const reportModel = {

    async getAllReportsModel() {
        const peticion = await fetch ('http://localhost:4000/reports')
        const report = await peticion.json()
        return report
    },

    async createReportModel(newreport){
        const url = 'http://localhost:4000/reports'
        const peticion = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newreport),
            headers:{'Content-Type':'application/json'}
        })
        const data = await peticion.json()
        return data

    },

    async getReportByIDModel(reportId){
        const peticion = await fetch(`http://localhost:4000/reports/${reportId}`)
        if(!peticion.ok){
            return {error:"Reporte no encontrado"}
        }
        const report = await peticion.json()

        return report
    }


}

export default reportModel