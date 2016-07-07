const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const srcPath = './static/images'
const destPath = './dist/images'

imagemin(
  [`${srcPath}/*.{jpg,png,gif,svg}`],
  destPath,
  {
    plugins: [
      imageminMozjpeg({quality: 95}),
      imageminPngquant({quality: '65-80'})
    ]
  }
)
.catch(err => {
  console.error('ERROR running imagemin', err)
})
