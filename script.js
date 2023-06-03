async function getData() {
  try {
    let todoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    let todoData = todoResponse.json();

    let postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    let postData = postResponse.json();

    const combineData = {
      todo: todoData,
      post: postData,
    };

    console.log(combineData);
  } catch (err) {
    console.log(err);
  }
}

getData();
