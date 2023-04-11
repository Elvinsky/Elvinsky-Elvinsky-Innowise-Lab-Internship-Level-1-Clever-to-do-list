import { collection, getDocs,addDoc } from 'firebase/firestore/lite';
export async function getItems(db) {
    const itemsCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCol);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}
export async function setItem(db){
    const ref = collection(db,'items');
    const data ={
        name:'test',
        address:'test1'
    }
    addDoc(ref,data).then(docRef=>{
        console.log('Document added with id ', docRef.id);
    })
}