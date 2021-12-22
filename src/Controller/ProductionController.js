const ProductionService = require('../service/ProductionServices')
const path=require("path")


class ProductionServices {
   
    async GetProduction(req, res) {
        try {
            let data = await ProductionService.GetProduction();
            res.json(data)
        } catch (error) {
            console.log(error)

        }
    }
    async deleteProduction(req, res) {
        try {
            let data = req.params.id;
            let result = await ProductionService.deleteProduction(data);
            res.json(result)


        } catch (error) {
            console.log(error)
        }
    }
    async createProduction(req, res) {
        try {


            let files = req.file;
            let body = req.body;
            let data = await ProductionService.createProduction(body, files);
            res.json(data);
        } catch (error) {
            console.log(error)

        }

    }
    async ProductionDownload(req,res){
        try{
            let filename= req.params.filename;
            res.sendfile(path.join(process.cwd(),'productionImg',filename));

        }catch(error){
            console.log(error);
            

        }

    }


}
module.exports = new ProductionServices();