import axios from 'axios';

let actions={
  
  UPDATE_BANNER:({state,commit},payload)=>{
    // 判断payload的数据类型
    axios({
      url:'/api/banner',
      params:{
        _page: payload._page ? payload._page : 1,
        _limit: payload._limit ? payload._limit : 10
      }
    }).then(
      
      res => {
        console.log(res)
        commit('UPDATE_BANNER',res.data.data)
      }
    )
  },

  UPDATE_NAV:({state,commit},payload)=>{
    // 判断payload的数据类型
    commit('UPDATE_NAV',payload)
  },
  
  UPDATE_FOOT:({state,commit},payload)=>{
    commit('UPDATE_FOOT',payload)
  },
  
  UPDATE_LOADING:({state,commit},payload)=>{
    commit('UPDATE_LOADING',payload)
  },
  
  UPDATE_USER:({state,commit},payload)=>{
    return axios({
      url:'/api/login',
      params:{
        username:payload.username,
        password:payload.password
      }
    }).then(
      res => {
        commit('UPDATE_USER',res.data);
        return res.data
      }
    )
  },
  
  UPDATE_HOME:({state,commit},payload)=>{
    axios({
      url:'/api/home',
      params:{
        _page: payload._page ? payload._page : 1,
        _limit: payload._limit ? payload._limit : 10
      }
    }).then(
      res => commit('UPDATE_HOME',res.data.data)
    )
  },

  UPDATE_FOLLOW:({state,commit},payload)=>{
    axios({
      url:'/api/follow',
      params:{
        _page: payload._page ? payload._page : 1,
        _limit: payload._limit ? payload._limit : 10
      }
    }).then(
      res => commit('UPDATE_FOLLOW',res.data.data)
    )
  },

  UPDATE_DETAIL:({state,commit},payload)=>{
    axios({
      url:'/api/'+ payload.dataName +'/'+ payload.id 
    }).then(
      res => commit('UPDATE_DETAIL',res.data.data)
    )
  },
  
};

export default actions;