import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static instance = new Storage();

  async store(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (err) {
      console.log('storage store err', err);
      return false;
    }
  }

  async get(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log('storage get err', err);
      throw new Error(err);
    }
  }

  async multiGet(keys) {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (err) {
      console.log('storage multiGet err', err);
      throw new Error(err);
    }
  }

  async getAllKeys() {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (err) {
      console.log('storage getAllKeys err', err);
      throw new Error(err);
    }
  }

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      console.log('storage remove err', err);
      return false;
    }
  }
}

export default Storage;
