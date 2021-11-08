let Helpers = () => {
  
  this.SEARCH_RESULT_CNTR = document.getElementById("searchResultContainer");
  // console.log(this.SEARCH_RESULT_CNTR.querySelector("#searchResult"));
  // ----------------------
  // # Get task's value
  let taskValue = () => document
    .querySelector(".create-task .task-name")
    .value;
  // ----------------------
  // # Get all tasks in the workspace
  let getAllTasks = () => document.querySelectorAll(".task");
  // ----------------------
  // # Get created-date of task
  let getCreatedDate = task => task.querySelector(".build-date").textContent;
  // ----------------------
  // # Get `created-address` of `task`
  let getTaskTitle = task => task.querySelector(".task-name-sec").textContent;
  // ----------------------
  // # Get the rest of search's order
  let getRestFOrder = (tskValue) => {
    let orderInfo = getOrderInfo(tskValue);
    // Return rest of order
    return tskValue.slice(orderInfo.orderLength+2, tskValue.length);;
  };
  // ----------------------
  // # Get order
  let getOrder = (tskValue) => {
    // # Get required order
    return tskValue.split(" ")[0].slice(1, tskValue.length);
  };
  // ----------------------
  // # Get info about order
  let getOrderInfo = (tskValue) => {
    let order = getOrder(tskValue);
    return {
      order,
      orderLength: order.length
    };
  };
  // ----------------------
  // # Hide `task`
  const hideTask = task => task.style.display = "none";
  // ----------------------
  // # Show all tasks in workspace
  const showAllTasks = () => {
    
  };
  // ----------------------
  // # Hide `search_results`
  const hideSearchResult = () => {
    let searchResultsCntr = document.getElementById("searchResult");
    searchResultsCntr.style.display = "none";
    // searchResultsCntr.remove()
  };
  
  // ----------------------
  // # Handle `search_results`
  const handleSearchResult = () => {
    const searchResult = document.getElementById("searchResult");
    if (searchResult) { 
      searchResult.remove();
      // # (Recreate & Add) `search_results`
      addSearchResult(createSearchResult());
    } else { 
      // # Recreate `search_results`
      addSearchResult(createSearchResult());
    };
  };
  // ----------------------
  // # Get `search-result`
  const getSearchResult = () => this.SEARCH_RESULT_CNTR.querySelector("#searchResult");
  // ----------------------
  // # Create `search_results`
  const createSearchResult = () => { 
    const searchResult = document.createElement("div");
    searchResult.id = "searchResult";
    return searchResult;
  };
  // ----------------------
  // # Add `search_results`
  const addSearchResult = (searchResult) => { 
    this.SEARCH_RESULT_CNTR.append(searchResult);
  };
  // ----------------------
  // # Show `search_result`
  const showSearchResult = (searchResult) => {
    // [+1] Handle `searchResult`
    handleSearchResult();
    
    // [+2] Get done-tasks-container 
    // .>> & render it in `searchResult`
    getSearchResult().append(searchResult);
  };
  
  return {
    getAllTasks: getAllTasks(),
    getCreatedDate: getCreatedDate,
    getRestFOrder: getRestFOrder,
    taskValue: taskValue(),
    getOrder: getOrder,
    TASK_TITLE: getTaskTitle,
    hideTask: hideTask,
    showAllTasks: showAllTasks(),
    showSearchResult: showSearchResult,
    hideSearchResult: hideSearchResult,
    // handleSearchResult: handleSearchResult,
    // getSearchResult: getSearchResult
  };
};
// End!