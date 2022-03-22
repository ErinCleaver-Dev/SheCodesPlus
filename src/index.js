// import Axios
//JS Challenge 2
//Given the API https://jsonplaceholder.typicode.com/, get the comments (/comments) and log the API response

const getComments = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
      });
  };
  
  //JS Challenge 3
  //Log the first comment email from the API respons
  