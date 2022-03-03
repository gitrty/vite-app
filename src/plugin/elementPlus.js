import { ElMessage } from "element-plus";
import 'element-plus/es/components/message/style/css'

export default {
    install(app) {
        app.config.globalProperties.$message = ElMessage
    }
}
