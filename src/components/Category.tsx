export default function Category() {

  const categorys = ['All Post', 'my story', 'frontend', 'backend', 'javascript'];

  return (
    <aside className="basis-1/5 shadow-xl rounded-md mr-8 mt-8 p-6">
      <h3 className="font-bold text-xl text-rose-500 mb-3">CATEGORY</h3>
      <ul className="font-semibold text-sm">
        {
          categorys.map((category, index) => (
            <li
              key={index}
              className="hover:text-rose-400 block p-1 cursor-pointer"
            >{category}</li>
          ))
        }
      </ul>
    </aside>
  );
}

