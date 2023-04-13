import { collection, query, where, getDocs } from 'firebase/firestore/lite';

export const whereQuery = async (db, doc, field, value) => {
    const q = query(collection(db, doc), where(field, '==', value));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => doc.data());
    return results;
};
