import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

(async () => {
  try {
    const response = await axios.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
    console.log(response.data.userId);
    console.log(response.data.id);
    console.log(response.data.title);
    console.log(response.data.body);
  } catch (error) {}
})();
