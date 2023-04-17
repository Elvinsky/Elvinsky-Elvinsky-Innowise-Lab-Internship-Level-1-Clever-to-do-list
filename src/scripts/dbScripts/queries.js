import { collection, query, where, getDocs,and,or } from 'firebase/firestore/lite';
import { db } from '@/firebase';
export const whereQuery = async (doc, field, value) => {
    const q = query(collection(db, doc), where(field, '==', value));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    return results;
};
export const loginQuery = async (email,pass) => {
    const q = query(collection(db, 'users'), and(
        or(
            where('email', '==', email),
            where('username','==',email)),
            
        where('password','==',pass)));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    return results;
};
export const getTodosByDay = async (date,path) => {
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const startSec =startOfDay.getTime()
    console.log(startOfDay,startSec);
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));
    const endSec =endOfDay.getTime();
    console.log(endOfDay,endSec);
    const q = query(
        collection(db, path),and(
            where('date', '>=', startSec),
            where('date', '<=', endSec))
        
    );
  
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    return results;
};
