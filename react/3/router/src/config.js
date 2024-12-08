const a = {
    isLogin: false,
    login: async ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                a.isLogin = true;
                // resolve(true)
                reject(false)
            },1000)
        })
    },
    logout: function(){
        this.isLogin = false
    }

}

export default a