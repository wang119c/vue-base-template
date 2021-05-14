/**
 * 是不是外部路径
 * @param path
 * @returns {boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 验证用户名（这里可以不用）
 * @param str
 * @returns {boolean}
 */
export function validUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/**
 * 验证url
 * @param url
 * @returns {boolean}
 */
export function validURL (url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * 验证小写
 * @param str
 * @returns {boolean}
 */
export function validLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 验证大写
 * @param str
 * @returns {boolean}
 */
export function validUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 验证是不是字母
 * @param str
 * @returns {boolean}
 */
export function validAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 验证email
 * @param email
 * @returns {boolean}
 */
export function validEmail (email) {
  const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
  return emailReg.test(email)
}

/**
 * 验证是不是字符串
 * @param str
 * @returns {boolean}
 */
export function isString (str) {
  return typeof str === 'string' || str instanceof String
}

/**
 * 验证是不是数组
 * @param arg
 * @returns boolean
 */
export function isArray (arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 检测ip地址的格式
 * @param strIP
 * @returns {boolean}
 */
export function isIP (strIP) {
  if (isNull(strIP)) {
    return false
  }
  const re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/ // 匹配IP地址的正则表达式
  if (re.test(strIP)) {
    if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
      return true
    }
  }
  return false
}

/**
 * 检查输入字符串是否为空或者全部都是空格
 * @param str
 * @returns {boolean}
 */
export function isNull (str) {
  if (str === '') return true
  const re = new RegExp('^[ ]+$')
  return re.test(str)
}

/**
 * 检测是不是手机号   13588888888
 * @param strMobile
 * @returns {boolean}
 */
export function checkMobile (strMobile) {
  const regu = /^[1][345678][0-9]{9}$/
  const re = new RegExp(regu)
  return re.test(strMobile)
}

/**
 * 检测是不是电话号码
 * @param strPhone
 * @returns {boolean}
 */
export function checkPhone (strPhone) {
  const phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/
  const phoneRegNoArea = /^[1-9][0-9]{5,8}$/
  if (strPhone.length > 9) {
    return phoneRegWithArea.test(strPhone)
  } else {
    return phoneRegNoArea.test(strPhone)
  }
}

/**
 * 检查输入对象的值是否符合整数格式
 * @param str
 * @returns {boolean}
 */
export function isInteger (str) {
  const reg = /^[-]?[0-9]+$/
  return reg.test(str)
}

/**
 * 检查输入字符串是否符合正整数格式
 * @param s
 * @returns {boolean}
 */
export function isNumber (s) {
  const reg = '^[0-9]+$'
  const re = new RegExp(reg)
  return s.search(re) !== -1
}

/**
 * 检查输入字符串是否是带小数的数字格式,可以是负数
 * @param str
 * @returns {boolean}
 */
export function isDecimal (str) {
  if (isInteger(str)) return true
  const re = /^[-]?(\d+)[.]+(\d+)$/
  if (re.test(str)) {
    return !(RegExp.$1 === 0 && RegExp.$2 === 0)
  } else {
    return false
  }
}

/**
 * 检查输入对象的值是否符合端口号格式
 * @param str
 * @returns {boolean}
 */
export function isPort (str) {
  return (isNumber(str) && str < 65536)
}
