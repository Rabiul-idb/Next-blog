

const BlogDetails = async({params})=>{
   
     const {id}  = await params;
    

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await data.json();

    return(
        <div className="pt-8">
            <div className="w-11/12 mx-auto">
                <h2 className="font-bold text-2xl text-center mb-5">blog Details</h2>
                <div className="max-w-7xl mx-auto p-5">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <p className="text-black>Blog ID: {blog.id}</p>
                        <h2 className="text-lg text-black font-bold mb-2">{blog.title}</h2>
                        <p className="text-black">{blog.body}</p>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default BlogDetails;
