import { whereQuery } from '../dbScripts/queries'
export const isValidCreds =(data)=>{
    if(data.name.length>0 && data.name.length<=80){
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email) && data.email.length<=80){
            if(data.password.length>=5 && data.password.length<=30){
                if(data.password===data.repPassword)
                {
                    return true
                }                
            }
        }
    }
    // return true
    alert('Error')
    return false
}
export const isUniqueUser = async (data)=>{
    return data = await whereQuery('users','username',data.name)
}
export const statusCheck=(todos)=>{
    const flags={
        done:false,
        undone:false
    }
    for(let i=0;i<todos.length;i++){
        if(todos[i].done){
            flags.done=true;
        }
        else{
            flags.undone=true
        }
    }
    return flags
}