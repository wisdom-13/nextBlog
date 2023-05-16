import { getAllPosts } from "@/service/posts";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: Props) {

  return (
    <aside className="basis-1/5 shadow-xl rounded-md mr-8 p-6">
      <h3 className="font-bold text-xl text-rose-500 mb-3">CATEGORY</h3>
      <ul className="font-semibold text-sm">
        {
          categories.map((category, index) => (
            <li
              key={category}
              onClick={() => onClick(category)}
              className={`hover:text-rose-400 block p-1 cursor-pointer ${category === selected && 'text-rose-500'}`}
            >{category}</li>
          ))
        }
      </ul>
    </aside>
  );
}

