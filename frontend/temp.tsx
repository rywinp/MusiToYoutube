export async function getServerSideProps() {
    const res = await fetch('{BACKEND_URL}/posts/1');
    const data = await res.json();
  
    return {
      props: { post: data },
    };
  }
  
  export default function Post({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  