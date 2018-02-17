import mockNotifications from '../assets/mocks/mockNotifications';
import axios from 'axios';

class Database {
  async fetchNotifications() {
    return await mockNotifications;
  }
}

export default new Database();
