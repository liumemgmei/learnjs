import { toObject } from './transform';
var getStackTrace = function () {
  var obj = {};
  //@ts-ignore
  Error.captureStackTrace(obj, getStackTrace);
  //@ts-ignore
  return obj.stack;
};
var log2 = console.log;
console.log = function () {
  var stack = getStackTrace() || ""
  var matchResult = stack.match(/\(.*?\)/g) || []
  var line = matchResult[1] || ""
  for (var i in arguments) {
    if (typeof arguments[i] == 'object') {
      arguments[i] = JSON.stringify(arguments[i])
    }
    arguments[i] += '----' + line.replace("(", "").replace(")", "")
  }
  // @ts-ignore
  log2.apply(console, arguments)
};

type VarAction = {
  fieldDisplayName: string;
  fieldName?: string;
  formula?: string;
};

type ActionType =
  | "num"
  | "del"
  | "operator"
  | "decimal"
  | "leftbracket"
  | "rightbracket"
  | "var";
type Actions = Array<VarAction & { type: ActionType }>;
type Action = VarAction & { type: ActionType };


const str = '[[price]]+[[area]]';
const express = '[[price]]+8'
let _vars = [
  { fieldDisplayName: '单价', fieldName: 'price' },
  { fieldDisplayName: '面积', fieldName: 'area' },
];

var reg = /\[\[(.+?)\]\]/;
var reg_g1 = /\[\[(.+?)\]\]/g;




function isValidate (result, vars: Array<VarAction>) {

  let flag = true;
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    let field = element.match(reg)?.[1];
    if (vars.filter((item) => item.fieldName === field).length) {
      continue;
    } else {
      return false;
    }

  }
  return flag

}

function toAction (str, vars) {

  const varsObj = toObject(vars, 'fieldName')
  let arr: Actions = [];

  let result = str.match(reg_g1) || [];
  if (isValidate(result, vars)) {
    let value = str.replace(reg_g1, ($0, $1) => {
      return '$';
    });
    let varindex = result!.length - 1;
    // 首先判断变量是否被删除
    for (let index = value.length - 1; index >= 0; index--) {
      let action: Action = {
        type: '' as any,
        fieldDisplayName: '',// 字段中文名
        fieldName: '',// 字段英文名
        formula: ''// 从变量表中读取（变量公式）
      }
      const element = value[index];
      // 判断类型
      if (element === '$') {
        // action.type = 'var';
        let fieldName = result[varindex].match(reg)?.[1];
        let obj: VarAction = varsObj[fieldName];
        action = {...obj, type:'var'}
        varindex = varindex-1;

      } else if (element === '.') {
        action.type = 'decimal'
        action.fieldDisplayName = element
      }
      else if (element === '(') {
        action.type = 'leftbracket'
        action.fieldDisplayName = element

      }
      else if (element === ')') {
        action.type = 'rightbracket'
        action.fieldDisplayName = element

      }
      else if (['1'].includes(element)) {
        action.type = 'num'
        action.fieldDisplayName = element
      } else if (['1'].includes(element)) {
        action.type = 'operator';
      }
      arr.push(action);
    }
  }else{
    console.log('公式不合法');
  }
  return arr;
}

console.log(toAction(str, _vars),{depth: null});