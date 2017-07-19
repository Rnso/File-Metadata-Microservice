import config from './config'
import express from 'express'
import multer from 'multer'

const server = express()
 var upload = multer({dest: 'Uploads/'})

server.post('/upload', upload.single('uploadedFile'),(req, res) => {
  console.log(req.file)
  res.send({ size: req.file.size})
})

server.use(express.static('public'))

server.listen(config.port, () => {
    console.info('Express Listening on port:', config.port)
})