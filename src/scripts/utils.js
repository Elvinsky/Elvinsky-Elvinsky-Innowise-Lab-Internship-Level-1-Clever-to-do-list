import { whereQuery } from './dbScripts/queries'
import { db } from '@/firebase'
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
    return data = await whereQuery(db,'users','username',data.name)
}