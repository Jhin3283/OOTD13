const deletePost=require('../../modules/deletePost');
const validateToken=require('../../modules/validateToken');
const findUser=require('../../modules/findUser');

module.exports= async (req,res)=>{
    try {
        const loginMethod=req.query.loginmethod||0;
        const tokenInfo=await validateToken.validateToken(loginMethod,req.headers.authorization);
        await findUser({loginMethod:loginMethod,email:tokenInfo.email});
        await deletePost(req.query.id);
        res.status(204).send({response:'deleted'})
    } catch {
        res.status(401).send({response:'not authorized'})
    }
}