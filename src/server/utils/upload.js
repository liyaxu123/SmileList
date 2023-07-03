import path from 'path'
import multer from 'multer'

// 处理文件上传
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 设置文件保存位置
    if (file.fieldname == 'music') {
      cb(null, path.resolve(__dirname, '../public/music'))
    } else if (file.fieldname == 'cover') {
      cb(null, path.resolve(__dirname, '../public/cover'))
    } else if (file.fieldname == 'lyrics') {
      cb(null, path.resolve(__dirname, '../public/lyrics'))
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

export default upload
