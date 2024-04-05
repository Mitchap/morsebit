<template>
<div ref='vantaRef' style="height:100vh ; overflow: hidden !important;">
  <RouterLink to="/">
    <img class="w-52" src="/images/long-logo.png" alt="morsebit logo">
  </RouterLink>
  
<div class=" h-4/6 flex items-center justify-center">
  
  <p class="  md:text-xl lg:text-4xl text-neutral-200 font-mono">
     <span class="px-4 bg-gray-900/75"> System_All:  
    <span class="pulsate font-bold text-red-800">•OFFLINE</span>
  </span>
  </p>
 
  <RouterLink  to="#" >
    <div class="center-center mt-12 mb-0git ">
    <a class="btn-glitch-fill">
    <span class="text">//<span class="text-decoration">_</span>
    dive in</span><span class="decoration">&rArr;</span>
    </a>
    </div> 
  </RouterLink>

</div>



</div>  
</template>

<script>
import DOTS from 'vanta/dist/vanta.dots.min'

export default {
  mounted() {
    this.vantaEffect = DOTS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xbb1d00,
      color2: 0xca7e02,
      backgroundColor: 0x1b1b1b,
      size: 4.30,
      spacing: 60.00
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

/* style for pulsing text  */
.pulsate {
  -webkit-animation: pulsate 3s ease-out;
  -webkit-animation-iteration-count: infinite;
  animation: pulsate 3s ease-out; /* Standard syntax */
  animation-iteration-count: infinite;
  opacity: 0.2;
}

@-webkit-keyframes pulsate {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    opacity: 0.2;
  }
}

@keyframes pulsate {
  0% {
    opacity: 0.2;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    opacity: 0.2;
  }
}

/* style for button  */
.center-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}

[class*="btn-glitch-"] {
  display: inline-block;
  font-family: "VT323", monospace;
  border: 1px solid white;
  background-color: #1b1b1bbe;
  color: white;
  padding: 10px 13px;
  min-width: 175px;
  line-height: 1.5em;
  white-space: no-wrap;
  text-transform: uppercase;
  cursor: pointer;
}

[class*="btn-glitch-"] .text,
[class*="btn-glitch-"] .decoration {
  display: inline-block;
}

[class*="btn-glitch-"] .decoration {
  float: right;
}

[class*="btn-glitch-"]:hover,
[class*="btn-glitch-"]:focus {
  animation-name: glitch;
  animation-duration: 0.2s;
  background-color: #ff9832;
  color: black;
  border: 1px solid #ff9832;
}

[class*="btn-glitch-"]:hover .text-decoration,
[class*="btn-glitch-"]:hover .decoration {
  animation-name: blink;
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
}

[class*="btn-glitch-"]:hover:before {
  content: " ";
  width: 15px;
  border: 1px solid black;
  position: absolute;
  right: 25%;
  bottom: 3px;
  transform: rotate(35deg);
}

[class*="btn-glitch-"]:hover:after {
  animation-name: shrink;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  content: " ";
  width: 75%;
  border: 1px solid black;
  position: absolute;
  left: 0;
  bottom: 5px;
}

[class*="btn-glitch-"]:active {
  background: none;
  color: yellow;
}

[class*="btn-glitch-"]:active .text-decoration,
[class*="btn-glitch-"]:active .decoration {
  animation-name: none;
}

[class*="btn-glitch-"]:active:before,
[class*="btn-glitch-"]:active:after {
  display: none;
}

@keyframes glitch {
  25% {
    background-color: red;
    transform: translateX(-10px);
    letter-spacing: 10px;
  }
  35% {
    background-color: green;
    transform: translate(10px);
  }
  59% {
    opacity: 0;
  }
  60% {
    background-color: blue;
    transform: translate(-10px);
    filter: blur(5px);
  }
  100% {
    background-color: yellow;
    blur: (5px);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes shrink {
  100% {
    width: 10%;
  }
}


</style>