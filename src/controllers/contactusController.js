const { createTransport } = require('nodemailer')

const contactUs = async (req, res) => {
    console.log(req.body
        )
    const { name, email, message } = req.body;
    if (!name) {
        return res.status(400).json({ status: false, message: "Name is required." })
    }
    if (!email) {
        return res.status(400).json({ status: false, message: "Email is required." })
    }
    if (!message) {
        return res.status(400).json({ status: false, message: "Message is required." })
    }

    const transport = createTransport({
         host: "smtpout.secureserver.net",  
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth: {
        user: "info@krystalresearch.com",
        pass: "Rajani@1964" 
    }
    })
    // to: '<pavan.k@krystalresearch.com>, <info@krystalresearch.com>',
    await transport.sendMail({
        from: `<info@krystalresearch.com>`,
        to: '<danishp.1999@gmail.com>',
        subject: "A visitor at krystal research sent you a message.",
        // text: "hello this is my first email from node.js.",
        html: `<div style="background:#ecf2fb">
    <div style="background:#ecf2fb;padding:30px 5px">
        <div style="max-width:600px;min-width:295px;margin:0 auto">
            <div
                style="background:linear-gradient(130.49deg,#006caa 10.49%,#e877fa 111.09%);padding:45px 30px;border-top-left-radius:10px;border-top-right-radius:10px">
                <div style="text-align:center;color:#fff;font-size:18px;font-weight:500">
                    Contact Form Submitted details are below
                </div>
            </div>
            <div style="background:#fff;padding:20px;border-bottom-left-radius:10px;border-bottom-right-radius:10px">
                <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                    Name: <span
                        style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 500;">${name}</span> </p>
                <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                    Email Id: <span
                        style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 500;">${email}</span> </p>
                <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                    Message: <span
                        style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 500;">${message}</span> </p>
                 <p style="margin: 20px 0px 20px;  line-height: 1.5; font-size: 14px; color: #000;font-weight: 700;">
                   
            </div>
            <div style="text-align:center">
                <p style="font-size:11px;font-weight:600;color:#000">© Copyright 2023, All Rights Reserved | Krystal Research Solutions</p>
            </div>
        </div>

    </div>`
    }).then(() => {
        res.status(201).json({ message: "Email sent successfully." })
        console.log({ message: "Email sent successfully." })
    }).catch(err => {
        console.log({ message: err })
    })
}

module.exports = contactUs