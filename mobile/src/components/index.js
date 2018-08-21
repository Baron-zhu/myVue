import NavBar from './NavBar';
import Screen from './Screen';
import Content from './Content';
import TabBar from './TabBar';
import News from './News';
import Avatar from './Avatar';
import Icon from './Icon';
const components = {
    NavBar,
    Screen,
    Content,
    TabBar,
    Avatar,
    Icon,
    News
}

export default {
    install(Vue){
        Object.keys(components).map(key=>{
            const cp = components[key]
            Vue.component(cp.name,cp)
        })
    }
}