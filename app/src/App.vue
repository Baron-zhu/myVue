<template>
    <div id="app">
      <div style="text-align: center;">
        <Button type="disabled" long />
        <Button type="info" />
        <Button type="success" long />
        <Button type="primary" />
        <Button type="warning" long />
        <Button type="error" />
        <Button type="dashed" />

        <Icon name="quanping" />
        <Icon name="shimingrenzheng" :size="50" />
        <iSwitch size="large">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </iSwitch>
        <iSwitch size="large">
          <span slot="open">ON</span>
          <span slot="close">OFF</span>
        </iSwitch>
        <iSwitch size="default">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </iSwitch>
        <iSwitch size="small" />
      </div>
    </div>
</template>

<script>
// import Button from "./uis/Button";
// import Icon from "./uis/Icon";
// import iSwitch from "./uis/Switch";
// import Header from "./pages/Header";
export default {
  name: "App",
  components: {
    // Button,
    // Icon,
    // iSwitch
  }
};
</script>

<style>

</style>
