import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove,
  addDoc
} from 'firebase/firestore';
import { db } from './config';

/**
 * Shopping Cart Backend Logic
 * This handles the database interactions for the user's cart without
 * displaying anything on the frontend UI yet.
 */

// Collection references
const cartsCollection = collection(db, 'carts');

/**
 * Create a new empty cart for a user
 */
export const initializeCart = async (userId) => {
  try {
    const cartRef = doc(cartsCollection, userId);
    await setDoc(cartRef, {
      items: [],
      updatedAt: new Date()
    });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Add a product to the user's cart
 */
export const addToCart = async (userId, product) => {
  try {
    const cartRef = doc(cartsCollection, userId);
    
    // Using arrayUnion to push the item into the items array
    await updateDoc(cartRef, {
      items: arrayUnion({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1, // Default quantity
        addedAt: new Date()
      }),
      updatedAt: new Date()
    });
    
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Fetch the user's entire cart
 */
export const getCart = async (userId) => {
  try {
    const cartRef = doc(cartsCollection, userId);
    const cartSnap = await getDoc(cartRef);
    
    if (cartSnap.exists()) {
      return { cart: cartSnap.data(), error: null };
    } else {
      // Cart doesn't exist, create one
      await initializeCart(userId);
      return { cart: { items: [] }, error: null };
    }
  } catch (error) {
    return { cart: null, error: error.message };
  }
};

/**
 * Save a customer message from the contact form
 */
export const saveContactMessage = async (messageData) => {
  try {
    const messagesCollection = collection(db, 'messages');
    await addDoc(messagesCollection, {
      ...messageData,
      createdAt: new Date(),
      status: 'unread' // To manage messages in the future
    });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

