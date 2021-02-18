import 'ant-design-vue/dist/antd.css';
import {
  Menu
} from 'ant-design-vue'

export default function installAntD(vm) {
  console.log(vm)
  vm.component(Menu.name, Menu)
}