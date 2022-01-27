const models=require('../models')

module.exports=async (userInfo,imageSrc,{shirts,pants,acc,outer,shoes},{sex,weather,season,style})=>{
    const content=await models.content.create({shirts,pants,acc,outer,shoes});
    const article = await models.article.create({
        user_id:userInfo.id,
        content_id:content.id,
        image_src:imageSrc
    })

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
            tag_id:tag.id
        })
    })
        
    return {
        post:{
            userId:article.user_id,
            username:userInfo.username,
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