import mockNotifications from '../assets/mocks/mockNotifications';

class Database {
  async getNotifications() {
    return await mockNotifications;
  }
}

export default new Database();
