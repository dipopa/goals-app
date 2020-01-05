function createStore () {
  let state

  getState = () => state

  return {
    getState
  }
}