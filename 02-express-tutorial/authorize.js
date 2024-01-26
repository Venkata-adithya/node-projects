const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user === 'john'){
        req.user = {user:'john',id:'3'}
        next()
    }else{
        res.send('Unauthorize')
    }
}

module.exports = authorize
