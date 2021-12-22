const express = require('express');
const AdminController = require('../Controller/AdminController');
const ProductionController = require('../Controller/ProductionController')
const appRouter = express.Router();
const multer = require('multer')

let storege = multer.diskStorage({
    destination: "productionImg",
    filename: function (req, image, cd) {
        cd(null, image.originalname)
    }
 

})
let upload=multer({
    storage:storege
})

appRouter.post('/admin/register', AdminController.registerAdmin);
appRouter.post('/admin/login', AdminController.login);
appRouter.post('/auth/production',upload.single("doc"), ProductionController.createProduction)
appRouter.get('/auth/getproduction', ProductionController.GetProduction)
appRouter.delete('/auth/deleteproduction/:id', ProductionController.deleteProduction)
appRouter.get('/auth/downloadimg/:filename',ProductionController.ProductionDownload)


module.exports = appRouter;