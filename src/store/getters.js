const getters = {
  name: (state) => state.user.name,
  token: (state) => state.user.token,
  sidebar: (state) => state.app.sidebar,
  permission_routes: (state) => state.permission.routes,
  roles: (state) => state.user.roles
}
export default getters
