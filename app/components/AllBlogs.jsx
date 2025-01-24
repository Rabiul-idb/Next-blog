import Link from "next/link";

const AllBlogs = async () => {
  const data = await fetch(" https://jsonplaceholder.typicode.com/posts");
  const allblogs = await data.json();

  return (
    <div className="w-11/12 mx-auto mt-7 mb-14">
      <h2 className="text-2xl font-bold text-center my-5">Recent Blogs</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
        allblogs.map((blog, index) => (
          <div key={index} className="card bg-base-100 shadow-lg hover:shadow-2xl duration-300">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.body}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${blog.id}`} className="btn">Details</Link>
              </div>
            </div>
          </div>
        )).slice(0, 9)
        }
      </div>
    </div>
  );
};

export default AllBlogs;
