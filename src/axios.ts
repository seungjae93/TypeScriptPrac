import axios, { AxiosResponse, AxiosError } from "axios";
interface Post {}
interface Created {}
interface Data {
  title: string;
  body: string;
  userId: number;
}
interface Config<D = any> {
  method?: "post" | "get" | "put" | "patch" | "delete" | "head" | "options";
  url?: string;
  data?: D;
}
interface A {
  get: <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>;
  post: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data: D
  ) => Promise<R>;
  isAxiosError: (error: unknown) => error is AxiosError;
  (config: {}): void;
  (url: string, config: {}): void;
}

const a: A = axios;
(async () => {
  try {
    const response = await a.get<Post, AxiosResponse<Post>>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const response2 = await a.post<Created, AxiosResponse<Created>, Data>(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );
    const response3 = await a({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
    const response4 = await a("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
  } catch (error) {
    if (a.isAxiosError(error)) {
      // 커스텀 타입 가드,
      //{message: '서버 장애입니다. 다시 시도해주세요'}
      console.error(
        (error.response as AxiosResponse<{ message: string }>)?.data.message
      );
    }
  }
})();
