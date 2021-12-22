const AdminService = require("../service/AdminLoginservicesjs");

class AdminController{
    async registerAdmin(req,res){
        try{
            let admin=req.body;
            let payload=await  AdminService.AdminRegistation(admin);
            res.json({
                message:"registration successfully"
            })

        }catch(error){
            console.log(error)
        }
    }
    async login(req,res){
        try{
            let credentailes=req.body;
            let result= await AdminService.login(credentailes);
            res.json(result);



        }catch(error){
            console.log(error)
        }
    }
}
module.exports=new AdminController();