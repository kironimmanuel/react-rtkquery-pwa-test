import { openDB } from 'idb';
import { Post } from '../types/Post';

const dbName = 'myDatabase';
const storeName = 'posts';

const dbPromise = openDB(dbName, 1, {
    upgrade(db) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    },
});

export const addPost = async (post: Post) => {
    const db = await dbPromise;
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await store.add(post);
    return tx.oncomplete;
};

export const editPost = async (id: number, updatedPost: Post) => {
    const db = await dbPromise;
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await store.put(updatedPost, id);
    return tx.oncomplete;
};

export const deletePost = async (id: number) => {
    const db = await dbPromise;
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await store.delete(id);
    return tx.oncomplete;
};

export const getPosts = async () => {
    const db = await dbPromise;
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    return store.getAll();
};
