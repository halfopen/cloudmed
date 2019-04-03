# coding: utf-8

from aliyunsdkcore.client import AcsClient
from aliyunsdkcore.request import *
client = AcsClient('LTAIDth9K7aEu4LZ', 'aEuBr5prInhXpi5ebsRzp2C5OSAgrn', 'cn-hangzhou')


def sendSMS(phone, code):
    request = CommonRequest()
    request.set_accept_format('json')
    request.set_domain('dysmsapi.aliyuncs.com')
    request.set_method('POST')
    request.set_protocol_type('https') # https | http
    request.set_version('2017-05-25')
    request.set_action_name('SendSms')

    request.add_query_param('RegionId', 'cn-hangzhou')
    request.add_query_param('PhoneNumbers', phone)
    request.add_query_param('SignName', '云中医')
    request.add_query_param('TemplateCode', 'SMS_162199809')
    request.add_query_param('TemplateParam', '{"code":'+code+'}')
    response = client.do_action(request)
    print(response)
    r = str(response, encoding='utf-8')
    return r

# sendSMS('15527039473', '1245')