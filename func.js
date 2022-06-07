import { groupBy } from 'lodash';
function test () {
  let res = {}
  tst(res);
  console.log(res)
}
function tst (res) {
  res.status = 'ok'
}

let data = {
  addressId: 239825274887476930,
  apartmentName: "410",
  areaSize: 2,
  buildingId: 500000257,
  buildingName: "北京大厦",
  chargeArea: 2,
  id: 500014318,
  livingStatus: 3,
}
let arr = []
for (const key in data) {
  if (Object.hasOwnProperty.call(data, key)) {
    const element = data[ key ];
    arr.push(key)
  }
}
function t () {
  let arr = [ 'a', 'b' ]
  let fild = 'c'
  switch (fild) {
    case 'a':
    case 'b':
      return 2


    default:
      return 1;
  }
}
console.log(t());

function mock (i) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (i == 1) {
        res(i)
      } else {
        rej(i)
      }
    }, 300);
  })
}
let _arr = [ {}, {} ]
const validate = async function () {
  try {
    for (let index = 0; index < _arr.length; index++) {
      const element = _arr[ index ];
      await mock(index)
    }
    console.log('sucess')
  } catch (error) {
    console.log('error', error)
  }

}

let data2 = {
  "version": "1.0.0",
  "errorCode": 200,
  "errorDescription": "OK",
  "response": {
    "list": [
      {
        "propertyIdentifier": "",
        "chargingItemName": "模板新增2",
        "dateStrBegin": "2022-03-01",
        "dateStrEnd": "2022-03-31",
        "taxAmount": 171.43,
        "billItemId": 501596351,
        "chargingItemId": 500002204,
        "amountReceivable": 1600,
        "amountReceivableWithoutTax": 1428.57,
        "amountReceived": 0,
        "prices": [
          {
            "price": "100",
            "dateStrBegin": "2022-03-01"
          }
        ],
        "segmentJson": "[{\"beginDate\":\"2022-03-01\",\"stopDate\":\"2022-03-31\",\"formulaType\":2,\"formulaJson\":\"price*discount*month_price*month_count*area\",\"fomulaBO\":{\"fomulaJson\":\"price*discount*month_price*month_count*area\"},\"paramsMap\":{\"area\":\"2.0\",\"month_count\":\"1.0000000000\",\"month_price\":\"10\",\"price\":\"100\",\"discount\":\"0.8\",\"sum\":\"1600.0000000000\"},\"variableMap\":{},\"ajustFlag\":false,\"freeFlag\":false}]",
        "status": 0,
        "apartments": [
          {
            "id": 502069043,
            "addressId": 239825274887476965,
            "buildingName": "上海大厦",
            "floorName": "2F",
            "apartmentName": "208",
            "areaSize": 2,
            "status": 2,
            "livingStatus": 1,
            "addressName": "上海大厦-208"
          }
        ],
        "dateStrDue": "2022-02-01",
        "dueDayDeadline": "2022-03-01"
      },
      {
        "propertyIdentifier": "",
        "chargingItemName": "模板新增2",
        "dateStrBegin": "2022-04-01",
        "dateStrEnd": "2022-04-30",
        "taxAmount": 171.43,
        "billItemId": 501596352,
        "chargingItemId": 500002204,
        "amountReceivable": 1600,
        "amountReceivableWithoutTax": 1428.57,
        "amountReceived": 0,
        "prices": [
          {
            "price": "100",
            "dateStrBegin": "2022-04-01"
          }
        ],
        "segmentJson": "[{\"beginDate\":\"2022-04-01\",\"stopDate\":\"2022-04-30\",\"formulaType\":2,\"formulaJson\":\"price*discount*month_price*month_count*area\",\"fomulaBO\":{\"fomulaJson\":\"price*discount*month_price*month_count*area\"},\"paramsMap\":{\"area\":\"2.0\",\"month_count\":\"1.0000000000\",\"month_price\":\"10\",\"price\":\"100\",\"discount\":\"0.8\",\"sum\":\"1600.0000000000\"},\"variableMap\":{},\"ajustFlag\":false,\"freeFlag\":false}]",
        "status": 0,
        "apartments": [
          {
            "id": 502069044,
            "addressId": 239825274887476965,
            "buildingName": "上海大厦",
            "floorName": "2F",
            "apartmentName": "208",
            "areaSize": 2,
            "status": 2,
            "livingStatus": 1,
            "addressName": "上海大厦-208"
          }
        ],
        "dateStrDue": "2022-03-01",
        "dueDayDeadline": "2022-04-01"
      },
      {
        "propertyIdentifier": "",
        "chargingItemName": "模板新增2",
        "dateStrBegin": "2022-05-01",
        "dateStrEnd": "2022-05-31",
        "taxAmount": 171.43,
        "billItemId": 501596353,
        "chargingItemId": 500002204,
        "amountReceivable": 1600,
        "amountReceivableWithoutTax": 1428.57,
        "amountReceived": 0,
        "prices": [
          {
            "price": "100",
            "dateStrBegin": "2022-05-01"
          }
        ],
        "segmentJson": "[{\"beginDate\":\"2022-05-01\",\"stopDate\":\"2022-05-31\",\"formulaType\":2,\"formulaJson\":\"price*discount*month_price*month_count*area\",\"fomulaBO\":{\"fomulaJson\":\"price*discount*month_price*month_count*area\"},\"paramsMap\":{\"area\":\"2.0\",\"month_count\":\"1.0000000000\",\"month_price\":\"10\",\"price\":\"100\",\"discount\":\"0.8\",\"sum\":\"1600.0000000000\"},\"variableMap\":{},\"ajustFlag\":false,\"freeFlag\":false}]",
        "status": 0,
        "apartments": [
          {
            "id": 502069045,
            "addressId": 239825274887476965,
            "buildingName": "上海大厦",
            "floorName": "2F",
            "apartmentName": "208",
            "areaSize": 2,
            "status": 2,
            "livingStatus": 1,
            "addressName": "上海大厦-208"
          }
        ],
        "dateStrDue": "2022-04-01",
        "dueDayDeadline": "2022-05-01"
      } ]
  }
}

function getDataSourceSorted (arr, groupKey) {
  let groupIds = [];
  let newarr = []
  const group = groupBy([ ...arr ], (record) => {
    let key = record[ groupKey ];
    if (!groupIds.includes(key)) groupIds.push(key);
    return key
  });
  groupIds.forEach(groupId => {
    const bills = group[ groupId ];
    bills[ 0 ].rowSpan = bills.length;
    newarr.push(...bills);
  });
  return newarr;
}
// validate()

function testSwitch (key) {
  let a = [];
  switch (key) {
    case 1: {
      a.push(1)
    }

    case 2:
    case 3:
      // {
      a.push(2, 3);
      a.push(2, 3);
    // }
    // break;

    case 4: {
      a.push(4);
    }
    default:
      break;
  }
  console.log(a);
}
testSwitch(2);
