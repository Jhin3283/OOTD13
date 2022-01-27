const modifyPost=require('../../modules/modifyPost');
const validateToken=require('../../modules/validateToken');
const findUser=require('../../modules/findUser');

module.exports=async (req,res)=>{
    const loginMethod=req.query.loginmethod||0;
    let contentCondition={};
    if(req.body.shirts) contentCondition.shirts=req.body.shirts;
    if(req.body.pants) contentCondition.pants=req.body.pants;
    if(req.body.acc) contentCondition.acc=req.body.acc;
    if(req.body.outer) contentCondition.outer=req.body.outer;
    if(req.body.shoes) contentCondition.shoes=req.body.shoes;

    let tagCondition={};
    if(req.body.sex) tagCondition.sex=100+req.body.sex;
    if(req.body.weather) tagCondition.weather=200+req.body.weather;
    if(req.body.season) tagCondition.season=300+req.body.season;
    if(req.body.style) tagCondition.style=400+req.body.style;

    try{
        const tokenInfo =await validateToken.validateToken(loginMethod,req.headers.authorization);
        await findUser({loginMethod:loginMethod,email:tokenInfo.email});
        const modifiedPost = await modifyPost(req.query.id,req.body.imageSrc,contentCondition,tagCondition);
        res.status(200).send({
            data:modifiedPost,
           response:'modified'
       })
    } catch {
        res.status(401).send({response:'not authorized'})
    }
}