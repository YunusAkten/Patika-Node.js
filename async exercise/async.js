const posts=[
    {id:1,title:"lorem ipsum dolor sit amet"},
    {id:2,title:"qui est esse "},
    {id:3,title:"dolorem eum magni eos aperiam quia"},
];
function listPosts(){
    let maxPostLength=0;
    for(let i=0;i<posts.length;i++){
        if(posts[i].title.length>maxPostLength){
            maxPostLength=posts[i].title.length;
        }
        console.log(posts[i].id+". "+ posts[i].title);
    }
    console.log("-".repeat(maxPostLength+4));
}
function createPost(post){
    const promise= new  Promise((resolve,reject)=>
    {
        posts.push(post);
        resolve(posts);
        reject(err.massage );
    });
}
listPosts();
createPost({id:4,title:"naber"});
listPosts();

