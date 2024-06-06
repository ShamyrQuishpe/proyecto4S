const reportModel = {

    async getAllReportsModel() {
        const peticion = await fetch ('http://localhost:4000/reports')
        const report = await peticion.json()
        return report
    }

}

export default reportModel