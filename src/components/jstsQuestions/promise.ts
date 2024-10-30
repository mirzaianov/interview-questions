const urlBase = `https://jsonplaceholder.typicode.com/todos/`;

// Use Promise to fetch one url
const fetchOneURL = async () => {
  try {
    const response = await fetch(`${urlBase}1`);

    // Check if the server indeed returns a response with status code 200
    if (!response.ok) {
      throw new Error(`Server error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('fetchOneURL >> ', data);
    // Check if the server is reachable
  } catch (e) {
    if (e instanceof Error && e.message.startsWith('Server error!')) {
      console.log(e.message);
    } else if (e instanceof Error) {
      console.log(`Fetch error! ${e.message}`);
    } else {
      console.log(`Unexpected error!`);
    }
  }
};

fetchOneURL();

const urls = Array(5)
  .fill(undefined)
  .map((_, i) => `${urlBase}${i + 1}`);
// console.log(urls);

// Use Promise.all to fetch multiple urls
const fetchMultipleURLs = async () => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    if (responses.some((r) => !r.ok)) {
      throw new Error(
        `Server error! Status: ${responses.find((r) => !r.ok)!.status}`,
      );
    }

    const data = await Promise.all(responses.map((r) => r.json()));

    console.log('fetchMultipleURLs >> ', data);
  } catch (e) {
    if (e instanceof Error && e.message.startsWith('Server error!')) {
      console.log(e.message);
    } else if (e instanceof Error) {
      console.log(`Fetch error! ${e.message}`);
    } else {
      console.log(`Unexpected error!`);
    }
  }
};

// fetchMultipleURLs();

export { fetchMultipleURLs, fetchOneURL };
