// eslint-disable-next-line max-len
import{ collection, getDocs, addDoc, deleteDoc, setDoc, doc } from 'firebase/firestore/lite';

export async function getItems(db) {
    const itemsCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCol);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    return itemList;
}
export async function setItem(db,data){
    const ref = collection(db,'items');
    let uid=''
    addDoc(ref,data).then(docRef=>{
        uid = docRef._key.path.segments[1];
        updateItem(db,uid,{...data,id:uid})
    })
}

export async function updateItem(db, itemId, newData) {
    const itemRef = doc(db, 'items', itemId.toString());
    await setDoc(itemRef, newData, { merge: true });
}


export async function deleteItem(db, itemId) {
    const itemRef = doc(db, 'items', itemId);
    await deleteDoc(itemRef);
    console.log('Document deleted with id ', itemId);
}