const ProductionModel = require('../Models/ProductionModel')

class ProductionService {
    // async createProduction(data) {
    //     let result = await ProductionModel.create(data);
    //     return result;




    // }
    async GetProduction() {
        let result = await ProductionModel.find();
        return result;
    }
    async deleteProduction(data) {
        let result = await ProductionModel.findByIdAndDelete(data).exec();
        return result;
    }
    async createProduction(body, file){
        let result =await ProductionModel.create({
            image: file.filename,
            title:body.title,
            description:body.description,
            salelingPrice:body.salelingPrice,
            purchasingPrice:body.salelingPrice



           
        }) 
        return result;

    }
   

}
module.exports = new ProductionService();