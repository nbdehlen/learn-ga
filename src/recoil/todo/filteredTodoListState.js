import { selector } from "recoil";
import todoListFilterState from "./todoListFilterState";
import todoListState from "./todoListState";


const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    // when todoListFilterState and todoListState is fetched
    // they become dependencies of this selector.
    // This selector updates if either of it's dependencies update.
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoListState