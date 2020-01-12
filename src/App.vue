<template>
  <div id="app">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050505da;
  width: 100%;
  /* min-height: 100%; */
  position: absolute;
}
#particles-js{
    background: #333;
    /* background-size:cover; */
    background-image: url('./assets/img/星球.jpg');
    position: absolute;
    width: 100%;
    min-height: 100%;
    /*另其作为背景 */
    z-index: -1;
}
</style>
