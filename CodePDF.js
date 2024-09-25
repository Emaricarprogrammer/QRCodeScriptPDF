const Qrcode = require("qrcode")
const Fs = require("fs")
const PDFDocument = require("pdfkit")
const { resolve } = require("path")
const { rejects } = require("assert")

class GenerateQrcode{
    async genereteQrCode(txt) {
        try {
            const qrcode = await Qrcode.toDataURL(txt)
            return qrcode
    
            
        } catch (error) {
            console.error(error)
            
        }
        
    }
    
    
}
class CreatePDFCode{
    
    async createPDF(data, pathout, fields) {
        const genereteQrCodeInstance = new GenerateQrcode()
        const doc = new PDFDocument()
        const writeStream = Fs.createWriteStream(pathout)
        doc.pipe(writeStream)
    
        const selectedData = fields.map(field => `${field.charAt(0).toUpperCase() + field.slice(1)}: ${data[field]}`).join(', ');
        const qrcode = await genereteQrCodeInstance.genereteQrCode(selectedData)

        if(qrcode){
            const imgBuffer = Buffer.from(qrcode.split(',')[1], 'base64')
            doc.image(imgBuffer, {fit: [160, 160], align:'center', valign: 'center'})
    
        }        
        doc.fontSize(14).text(`---------------------------------------`, {align: 'left'})
        doc.moveDown(8)
        doc.fontSize(14).text(`---------------------------------------`, {align: 'left'})
        doc.moveDown() 

        doc.fontSize(18).text(`${data.title}`, {align: 'left'})
        doc.moveDown()
        fields.forEach((field) => {
            if (data[field]) {
                doc.fontSize(12).text(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${data[field]}`, { align: 'left' });
            }
        })
        
        doc.fontSize(8).fillColor('grey').moveDown(40).text("Gerador desenvolvido por Emaricar technology")
        doc.end()
    
        return new Promise((resolve, rejects)=>{
            writeStream.on('finish', ()=>resolve(pathout))
            writeStream.on('error', rejects)
        })
    
    
    
        
    }

}
module.exports = new CreatePDFCode()


