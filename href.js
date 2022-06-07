
const setUrlQuery = (paramsObj) => {
  if (Object.prototype.toString.call(paramsObj) !== '[object Object]') {
    console.log('params must be an object');
    return '';
  }

  let query = '';
  for (let k in paramsObj) {
    if (paramsObj[ k ] !== undefined && paramsObj[ k ] !== 'undefined' && paramsObj[ k ] !== '') {
      if (query != '') {
        query += '&';
      }
      query += `${k}=${paramsObj[ k ]}`;
    }
  }

  return query === '' ? '' : `?${query}`;
};

const getUrlQuery = (search) => {
  let query = {}, searchArray;
  if (typeof search !== 'string') {
    console.error('The type of getUrlQuery\'s param should be string!');
    return {};
  }
  if (search.indexOf('?') === 0) {
    search = search.substring(1);
  }

  searchArray = search.split('&');
  searchArray.forEach(item => {
    const arr = item.split('=');
    if (arr[ 0 ] && arr[ 1 ]) query[ arr[ 0 ] ] = decodeURIComponent(arr[ 1 ]);
  });

  return query;
};
const splitParams = (str) => {
  let result = {};
  if (str === '') {
    return {};
  }

  // 第1个为?，截掉
  str = str.substring(1);
  // str后边可能有hash值，截掉（/#/，#/，/#三种形式）
  let pos = 0;
  if (str.indexOf('#') > -1) {
    pos = str.indexOf('#');
    if (pos > 0 && str[ pos - 1 ] === '/') {
      pos = pos - 1;
    }
  }
  if (pos > 0) {
    str = str.substring(0, pos);
  }
  let strArr = str.split('&');
  for (let i = 0; i < strArr.length; i++) {
    let temp = strArr[ i ].split('=');
    result[ temp[ 0 ] ] = decodeURIComponent(temp[ 1 ]);
  }
  return result;
};
const getQueryParams = (param = '', str = '') => {
  const href = str;
  if (href === '') {
    return {};
  }
  let result = {},
    pos = [];

  // 获取所有?位置
  for (let i = 0; i < href.length; i++) {
    if (href[ i ] === '?') {
      pos.push(i);
    }
  }

  // 获取所有查询参数
  for (let i = 0; i < pos.length; i++) {
    if (i < pos.length - 1) {
      result = Object.assign({}, result, splitParams(href.substring(pos[ i ], pos[ i + 1 ])));
    } else {
      result = Object.assign({}, result, splitParams(href.substring(pos[ i ])));
    }
  }
  if (param) {
    return result[ param ] || new Error(`url上未查询到${param}参数`);
  }
  return result;
};

function setParams () {
  // const data = { id: 500006319, categoryId: 500000002, contractNumber: 'HT_ZL-202206-6623601'  };
  const data = { id: 500006331, categoryId: 500000002, contractNumber: 'HT_ZL-202206-6328215'  };
  const {categoryId, id, contractNumber} = data;
  let url = 'https://stdo-beta.zuolin.com/property-payment/build/index.html?lang=zh-CN&namespaceId=2&categoryId=&hideNavigationBar=1&ehnavigatorstyle=0&name=1&jumpService=true&communityId=240111044832061312&recordId=71&renewalSetting=1&isH5=0&customerId=500203099&customerType=0&appId=500005359&orgId=1023080&locationType=2&sceneType=2#/contractRenewal/500006319/500000002/HT_ZL-202206-6623601';
  let params  = getQueryParams('', url)
  console.log(params)
  params = {
    ...params,
    communityId: '240111044832061312',
  }
  let _url = 'https://stdo-beta.zuolin.com/property-payment/build/index.html' + `#/contractRenewal/${id}/${categoryId}/${contractNumber}` + setUrlQuery(params);
  console.log(_url)
}
setParams()