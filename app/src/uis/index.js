import Button from "./Button";
import Icon from "./Icon";
import Switch from "./Switch";



export default {
    install (Vue, b) {
        const components = {
            Button,
            Icon,
            Switch
        };
        Object.keys(components).map(k=>{
            let cpt = components[k];
            Vue.component(cpt.name,cpt);
        })
        // Vue.component(Button.name,Button);
        // Vue.component(Icon.name,Icon);
        // Vue.component(Switch.name,Switch);
    }
}