import { createStore } from 'vuex'

const files = import.meta.globEager("./modules/*.js")
const moduleStores = {};
Object.keys(files).forEach(key => {
    const fileName = key.slice(2, -3).split('/')[1];
    const fileModule = files[key].default;
    moduleStores[fileName] = {
        ...fileModule,
        namespaced: true,    //文件中有写可以省略
    };
});

// console.log(moduleStores)
const store = createStore({
    modules: moduleStores
})

export default store