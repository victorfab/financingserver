import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionService {
  getSession(){
    return {
      Status: {
        StatusCode: 0,
        StatusDesc: 'EXITO',
      },
      SecObjRec: {
        SecObjInfoBean: {
          SecObjData: [
            {
              SecObjDataKey: 'buc',
              SecObjDataValue: '53038719',
              SecObjDataType: 'STRING',
            },
            {
              SecObjDataKey: 'cardNumber',
              SecObjDataValue: '1234**5678',
              SecObjDataType: 'STRING',
            },
            {
              SecObjDataKey: 'cartType',
              SecObjDataValue: 'Credit',
              SecObjDataType: 'STRING',
            },
            {
              SecObjDataKey: 'codStamp',
              SecObjDataValue: '641',
              SecObjDataType: 'STRING',
            },
            {
              SecObjDataKey: 'cardName',
              SecObjDataValue: 'LikeU Blue',
              SecObjDataType: 'STRING',
            },
            {
              SecObjDataKey: 'numContrato',
              SecObjDataValue: '740002340470',
              SecObjDataType: 'STRING',
            },
          ],
        },
      },
    };
  }
}
