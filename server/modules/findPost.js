const models=require('../models')

module.exports=async (postId)=>{
        const article = await models.article.findOne({where:{id:postId}});
        const content = await models.content.findOne({where:{id:article.content_id}});
        return content;
}