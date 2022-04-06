import transporter from '../../server-setup/nodemailer';

export default async(req, res) => {
 
    try {

        const {
            email, fullName, phone, message, city, field1, field2
        } = req.body

        console.log('send message')
        console.log('field1', field1)
        console.log('field2', field2)        

        if(field1 !== 'Gdańsk, ul. Obrońców Wybrzeża 4B' || field2 !== '')
            return res.status(200).json('ok') 

        const msg = {
            from: process.env.EMAIL,
            to: "post@dyktighandverker.no",
            // bcc: process.env.NEXT_PUBLIC_ENV==='PROD'? ["biuro@virtoffice.pl"] : ["ivan@hrex.eu"],
            subject: `Antyposlizgowa Message`,
            html: `
                <div>     
                    <div>Full Name: ${fullName}</div>
                    <div>&nbsp;</div>
                    <div>E-mail: ${email}</div>
                    <div>&nbsp;</div>
                    <div>Phone number: ${phone}</div>
                    <div>&nbsp;</div>
                    <div>City: ${city}</div>
                    <div>&nbsp;</div>
                    <div>Message: ${message ?? 'Please contact with me.'}</div>
                </div>   
            `
        };   
    
        const info = await transporter.sendMail(msg)   

        console.log("Message sent: %s", info.messageId);  

        return res.status(200).json('ok') 

    } catch (error) {
        console.log('error', error)
        return res.status(500).json({message: error.message})
    } 
}
