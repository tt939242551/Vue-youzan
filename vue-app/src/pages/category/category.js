import mixin from '../../modules/js/mixin'
import '../../modules/css/common.css'
import './category.css'
import Vue from 'vue'
import axios from 'axios'
import Foot from '../components/footer2.vue'

new Vue({
  el: '#app',
  data:{
    lists1: null,
    lists: null,
    lists2: null,
    Active:0
  },
  components: {
    Foot,
  },
  methods: {
    getLists1(){ 
      axios.get('//rap2api.taobao.org/app/mock/7058/category/topList')
      .then(rep =>{    
        this.lists1 = rep.data.lists
      })
      .catch(err=>{
        console.log(err)
      })  
    },
    getLists(){
      axios.get('//rap2api.taobao.org/app/mock/7058/category/rank')
        .then(rep =>{    
          this.lists = rep.data.data
        })
        .catch(err=>{
          console.log(err)
        })    
    },
    getLists2(id,index){
      this.Active = index
      if (!this.Active) {
        this.getLists() 
      } else {
        axios.get('//rap2api.taobao.org/app/mock/7058/category/subList')
      .then(rep=>{
       this.lists2 = rep.data.data
      }) 
      }   
    },
    toSearch(list){
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    }
  },
  created() {
    this.getLists1()
    this.getLists()
  },
  mixins: [mixin]
})
