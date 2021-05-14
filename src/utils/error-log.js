import Vue from 'vue'
import settings from '@/settings'
import { isArray, isString } from '@/utils/validate'

const { errorLog: needErrorLog } = settings

/**
 * 检测是不是需要错误日志
 * @returns {boolean|*}
 */
function checkNeed () {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) {
    return env === needErrorLog
  }
  if (isArray(needErrorLog)) {
    return needErrorLog.includes(env)
  }
  return false
}

if (checkNeed()) {
  Vue.config.errorHandler = function (err, vm, info, a) {
    // https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500/2  解决错误
    Vue.nextTick(() => {
      // todo 这里需要发送错误日志
      console.error(err, info)
    })
  }
}
