const http=require('http');

const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('Hey, welcome Home!')
    }
    else if (req.url==='./about')
    {
    res.end('We have a long history of serving our nation and people')
    }
    res.end(`<h3>You seem to have asked for a non-existent page<h3/>`)
}
)