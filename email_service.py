#!/usr/bin/python
# -*- coding: utf-8 -*-

import smtplib
import mimetypes
import email.mime.application
import traceback
import json
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from os.path import basename
from flask import Flask
from flask_cors import CORS
from flask import jsonify
from flask import request
import os

ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)
cors = CORS(app, resources={r"/gosmartagro/*": {'origins': '*'}})

# Success and failure message format

successResp = {'status': 0, 'message': 'OK'}
failureResp = {'status': 1, 'message': 'NO'}

# Define to/from

sender = 'gosmartagro@gmail.com'
recipient = 'info@gosmartagro.com'

# File information for sending in attachment

filename = 'smartagro-investor-brochure.pdf'
fo = open(filename, 'rb')
attach = email.mime.application.MIMEApplication(fo.read(),
        _subtype='pdf')
fo.close()
attach.add_header('Content-Disposition', 'attachment',
                  filename=filename)


# For sending enquiry mail with no attachment

@app.route('/gosmartagro/enquiry/email', methods=['POST'])
def sendEnquiryEmail():
    try:
        server = smtplib.SMTP_SSL(
            'smtp.gmail.com',
            465,
            '0.0.0.0',
            'certs/private.key',
            'certs/certificate.crt',
            30,
            )
        server.login('gosmartagro@gmail.com', 'ETRsmart@321')
        req = request.get_json()
        equiryMsg = \
            '''Dear Team 
 An enquiry came from visitor, below is the details for your reference 
'''
        refMsg = \
            '''Dear referrer 
 Thanks for referring, our team will in touch with reference soon.
 Thanks and regards 
 Admin Team 

'''
        if 'name' in req:
            equiryMsg = equiryMsg + '\t Name : ' + req['name'] + '\n'
        if 'mobile' in req:
            equiryMsg = equiryMsg + '\t Mobile : ' + req['mobile'] \
                + '\n'
        if 'email' in req:
            equiryMsg = equiryMsg + '\t Email : ' + req['email'] + '\n'
        if 'message' in req:
            equiryMsg = equiryMsg + '\t Message : ' + req['message'] \
                + '\n'
        if 'rname' in req:
            equiryMsg = equiryMsg + '\t Referral name : ' + req['rname'
                    ] + '\n'
        if 'rmobile' in req:
            equiryMsg = equiryMsg + '\t Referral mobile : ' \
                + req['rmobile'] + '\n'
        if 'remail' in req:
            equiryMsg = equiryMsg + '\t Referral email : ' \
                + req['remail'] + '\n'
        if 'emailFor' in req:
            equiryMsg = equiryMsg + '\t Email for : ' + req['emailFor'] \
                + '\n'
        equiryMsg = equiryMsg \
            + '''Thanks and regards 
 Admin Team 

'''
        equiryMsg = equiryMsg \
            + '''Note :  Below is the key description of Email for  
 CU- Contact us page 
 FAQ- FAQ page 
 IN - Investor page 
 RAF - Home page Referer and Earan 
 GETC- Home page GET call back'''
        msg = MIMEText(equiryMsg)
        msg['Subject'] = 'Smart Agro visitor enquiry'
        msg['From'] = sender
        msg['To'] = recipient
        server.sendmail(sender, [recipient], msg.as_string())
        server.quit()
        if req['emailFor'] == 'RAF':
            serverTwo = smtplib.SMTP_SSL(
                'smtp.gmail.com',
                465,
                '0.0.0.0',
                'certs/private.key',
                'certs/certificate.crt',
                30,
                )
            serverTwo.login('gosmartagro@gmail.com', 'ETRsmart@321')
            rmsg = MIMEText(refMsg)
            rmsg['Subject'] = 'Referrer acknowledgement'
            rmsg['From'] = sender
            rmsg['To'] = req['email']
            serverTwo.sendmail(sender, [req['email']], rmsg.as_string())
            serverTwo.quit()
        return jsonify(successResp)
    except Exception:
        traceback.print_exc()
        return jsonify(failureResp)


# For sending investor mail with attachment

@app.route('/gosmartagro/investor/email', methods=['POST'])
def sendInvestorEmail():
    try:
        server = smtplib.SMTP_SSL(
            'smtp.gmail.com',
            465,
            '0.0.0.0',
            'certs/private.key',
            'certs/certificate.crt',
            30,
            )
        server.login('gosmartagro@gmail.com', 'ETRsmart@321')
        req = request.get_json()
        equiryMsg = \
            '''Dear Investor 
 Thanks for showing interest for investing with smartagro, please find the attached brochure for your reference.
'''
        equiryMsg = equiryMsg + 'Thanks and regards \n Admin Team'
        investorInfo = \
            '''Dear Team 
 An enquiry came from investor, below is the details for your reference 
'''
        if 'name' in req:
            investorInfo = investorInfo + '\t Name : ' + req['name'] \
                + '\n'
        if 'mobile' in req:
            investorInfo = investorInfo + '\t Mobile : ' + req['mobile'
                    ] + '\n'
        if 'email' in req:
            investorInfo = investorInfo + '\t Email : ' + req['email'] \
                + '\n'
        investorInfo = investorInfo \
            + '''Thanks and regards 
 Admin Team 

'''
        msgMulti = MIMEMultipart()
        msgMulti['Subject'] = 'SmartAgro Investor brochure'
        toSender = req['email']
        msgMulti['From'] = sender
        msgMulti['To'] = toSender
        msgMulti.attach(MIMEText(equiryMsg, 'plain'))
        msgMulti.attach(attach)
        server.sendmail(sender, [toSender], msgMulti.as_string())
        server.quit()
        serverTwo = smtplib.SMTP_SSL(
            'smtp.gmail.com',
            465,
            '0.0.0.0',
            'certs/private.key',
            'certs/certificate.crt',
            30,
            )
        serverTwo.login('gosmartagro@gmail.com', 'ETRsmart@321')
        msg = MIMEText(investorInfo)
        msg['Subject'] = 'Smart Agro investor enquiry'
        msg['From'] = sender
        msg['To'] = recipient
        serverTwo.sendmail(sender, [recipient], msg.as_string())
        serverTwo.quit()
        return jsonify(successResp)
    except Exception:
        traceback.print_exc()
        return jsonify(failureResp)

# Sever start up information

if __name__ == '__main__':
    context = ('certs/certificate.crt', 'certs/private.key')
    app.run(host='0.0.0.0', ssl_context=context)
