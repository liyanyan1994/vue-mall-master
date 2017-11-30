const localEvent = {
  StorageGetter: function(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  StorageSetter: function(key, val) {
    return localStorage.setItem(key, JSON.stringify(val))
  },
  LocalStoreSetting: function(obj) {
    var localStore;
    localStore = JSON.parse(localStorage.getItem("localStore")) || {};
    if (localStore.hasOwnProperty(obj.id)) { // 存在
      localStore[obj.id]["scanner_time"] = Math.round(new Date().getTime() / 1000);
    } else { // 不存在
      localStore[obj.id] = {
        "scanner_time": Math.round(new Date().getTime() / 1000),
        ...obj
      }
    }
    localStorage.setItem("localStore", JSON.stringify(localStore));
    return localStore
  }
}

export default localEvent
