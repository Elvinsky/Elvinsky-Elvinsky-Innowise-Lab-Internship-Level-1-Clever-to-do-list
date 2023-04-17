// eslint-disable-next-line max-len
import{ collection, getDocs, addDoc, deleteDoc, setDoc, doc } from 'firebase/firestore/lite';
import { db } from '@/firebase';
export async function getItems(doc) {
    const itemsCol = collection(db, doc);
    const itemSnapshot = await getDocs(itemsCol);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}
export async function setItem(item,data){
    const ref = collection(db,item);
    let uid=''
    addDoc(ref,data).then(docRef=>{
        uid = docRef._key.path.segments[1];
        updateItem(db,item,uid,{...data,id:uid})
    })
}

export async function updateItem(item, itemId, newData) {
    const itemRef = doc(db, item, itemId.toString());
    await setDoc(itemRef, newData, { merge: true });
}


export async function deleteItem(db,doc, itemId) {
    const itemRef = doc(db, doc, itemId);
    await deleteDoc(itemRef);
    console.log('Document deleted with id ', itemId);
}