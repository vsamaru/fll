export async function getPosts() {
  const endpoint = `https://jiijii.firebaseio.com/flareact-posts/.json`;
  const res = await fetch(endpoint);
  return await res.json();
}

export async function getPost(slug) {
  const endpoint = `https://jiijii.firebaseio.com/flareact-posts/.json?orderBy="author"&equalTo=${slug}&limitToLast=50`;
  const res = await fetch(endpoint);
  const posts = await res.json();
  return posts[0];
}
