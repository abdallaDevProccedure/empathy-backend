import multer from 'multer';

const uploadProducts = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/upload/products')
    },
    filename:(req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname)
    }
  }),
  fileFilter: (req, file, cb) => {
    const extensaoImg = ['image/png', 'image/jpeg', 'image/jpg'].find(formatoAceito => formatoAceito == file.mimetype);

    if(extensaoImg){
      return cb(null, true);
    }

    return cb(null, false)
  }
});

export default uploadProducts;
