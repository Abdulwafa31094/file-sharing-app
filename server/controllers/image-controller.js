import File from "../models/file.js";

export const uploadImg =  async (req,res) => {
    console.log(req);
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname,
    }
    try{
      const file =  await File.create(fileObj);
      console.log('file', file);
      res.status(200).json({ path :`https://localhost:8000/file/${file._id}` });
    }catch (err){
        console.error('Error  ', err.message)
        res.status(500).json({ error : err.message })
    }
}


export const getImg = async (req,res) => {
   try {
    const file = await File.findById(req.params.fileId);
    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
    
   }catch (err){
    console.error(err.message);
    return res.status(500).json({ error : err.message})
   }
}