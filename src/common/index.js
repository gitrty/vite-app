export default {
    install(app) {
        app.config.globalProperties.$path = (path, query = {}) => router.push({ path, query }).catch(e => e)
        app.config.globalProperties.$BASE_URL = import.meta.env.VITE_URL
    }
}
