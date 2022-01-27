const models=require('../models')

module.exports=async (postId) =>{
    const article=await models.article.findOne({where:{id:postId}});
    await models.article_tag.destroy({where:{article_id:postId}});
    await models.article.destroy({where:{id:postId}});
    await models.content.destroy({where:{id:article.content_id}});
}