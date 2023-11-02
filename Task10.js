const axios=require('axios');

const bseUrl='https://api.example.com';

async function getAllBooks(){
    try{
        const res=await axios.get(`${baseUrl}/books`);
        return res.data;
    }catch(e){
        throw e;
    }
}

async function handleResult(){
    try{
        const allBooks=await getAllBooks();
        console.log("All Books ",allBooks);
    }catch(e){
        console.log("Error ",e.message);
    }
}

handleResult();