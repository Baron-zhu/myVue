import NavBar from './NavBar';
import Screen from './Screen';
import Content from './Content';
import TabBar from './TabBar';
const components = {
    NavBar,
    Screen,
    Content,
    TabBar
}

export default {
    install(Vue){
        Object.keys(components).map(key=>{
            const cp = components[key]
            Vue.component(cp.name,cp)
        })
    }
}