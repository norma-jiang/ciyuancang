let mutations={

  UPDATE_BANNER:(state,payload)=>{
    state.banner=payload
  },

  UPDATE_ACTIVE:(state,payload)=>{
    state.active=payload
  },
  
  UPDATE_NAV:(state,payload)=>{
    state.bNav=payload
  },
  
  UPDATE_FOOT:(state,payload)=>{
    state.bFoot=payload
  },
  
  UPDATE_LOADING:(state,payload)=>{
    state.bLoading=payload
  },
  
  UPDATE_USER:(state,payload)=>{
    state.user=payload
  },
  
  UPDATE_HOME:(state,payload)=>state.home=payload,
  UPDATE_FOLLOW:(state,payload)=>state.follow=payload,
  UPDATE_DETAIL:(state,payload)=>state.detail=payload,

};

export default mutations;