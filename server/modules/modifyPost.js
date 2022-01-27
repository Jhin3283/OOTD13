const models=require('../models')

module.exports= async (postId,imageSrc,{shirts,pants,acc,outer,shoes},{sex,weather,season,style})=>{
    console.log(postId)
    const article=await models.article.findOne({where:{id:postId}});
    const user= await models.user.findOne({where:{id:article.user_id}})
    
    await models.content.update({shirts,pants,acc,outer,shoes},{where:{id:article.content_id}});
    await models.article.update({image_src:imageSrc},{where:{id:postId}});
        
    models.article_tag.destroy({where:{article_id:postId}});
        
    let tags=[];
    if(sex){
        const sexTag= await models.tag.findOne({where:{tag_num:sex}});
        tags.push(sexTag)
    }
    if(weather){
        const weatherTag= await models.tag.findOne({where:{tag_num:weather}});
        tags.push(weatherTag)
    }
    if(season){
        const seasonTag= await models.tag.findOne({where:{tag_num:season}});
        tags.push(seasonTag)
    }
    if(style){
        const styleTag= await models.tag.findOne({where:{tag_num:style}});
        tags.push(styleTag)
    }
    tags.forEach(tag=>{
        models.article_tag.create({
            article_id:article.id,
            tag_id:tag.Id
        })
    })
    const content=await models.content.findOne({where:{id:article.content_id}})

    return {
        post:{
            userId:article.user_id,
            username:user.username,
            imageSrc:imageSrc,
            like:article.like,
            view:article.like,
            postId:article.id,
            tag:tags.map((el)=>el.tag_name),
            createAt:article.createdAt
        },
        content:{
            shirts:content.shirts,
            pants:content.pants,
            acc:content.acc,
            outer:content.outer,
            shoes:content.shoes
        }
    }
}