<template>
  <div id="app">
    <router-view/>
    <!-- tc -->
    <DialogCommon  :visible='visible' :info='info'/>
  </div>
</template>

<script>
import DialogCommon from '@/components/tools/Dialog-common.vue'

export default {
    data(){
        return{
            visible:true,
            info:{
                title:'友情提示111',
                info:`<p>
                    $attrs: Object
                    $children: (4) [VueComponent, VueComponent, VueComponent, VueComponent]
                    $createElement: ƒ (a, b, c, d)
                    $el: div.container
                    $listeners: (...)
                    $options: {parent: VueComponent, _parentVnode: VNode, propsData: undefined, _parentListeners: undefined, _renderChildren: undefined, …}
                    $parent: VueComponent {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
                    $refs: {}
                    $root: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
                    $scopedSlots: {$stable: true, $key: undefined, $hasNormal: false}
                    $slots: {}
                    $vnode:
                </p>`
            }
        }
    },
    methods:{
      closeDiallog(flag){
        this.visible = flag
      }
      
    },
    components: {
       DialogCommon
    }
}
</script>

<style>
  body,div,p,ul,li,a,dl,ol{
    margin: 0;
    padding: 0;
  }
  body,html{
    width: 1920px;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar{
    width: 0;
  }
  #progressbar{
      position: fixed;
      top: 0;
      right: 0;
      width: 10px;
      height: 100%;
      background: linear-gradient(to top,#008aff,#00ffe7);
      z-index: 50;
      animation: animate 5s linear  infinite;
  }
  #progressbar::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    /* height: 100%; */
    background: linear-gradient(to top,#008aff,#00ffe7);
    filter: blur(10px);
  }
  #progressbar::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top,#008aff,#00ffe7);
    filter: blur(20px);
  }
  @keyframes animate{
    0%{filter: hue-rotate(0deg);}
    50%{filter: hue-rotate(360deg);}
  }
  #scrollPath{
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: rgba(255,255,255,0.05);
    z-index: 40;

  }
  #loadings{
            position: fixed;
            height: 100%;
            width: 100%;
            background: #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            z-index: 99999;
        }
</style>
