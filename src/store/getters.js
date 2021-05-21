const getters = {
  name: (state) => state.user.name,
  token: (state) => state.user.token,
  sidebar: (state) => state.app.sidebar,
  permission_routes: (state) => state.permission.routes,
  roles: (state) => state.user.roles,
  device: state => state.app.device,
  errorLogs: state => state.errorLog.logs,
  size: state => state.app.size,
  avatar: state => state.user.avatar
}
export default getters
