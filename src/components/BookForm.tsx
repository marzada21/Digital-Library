import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseAuthor, chooseGenre, chooseSeries, chooseISBN } from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
  onClose: () => void;
}

const BookForm = ( props:BookFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.title } by ${ data.author }`)
      setTimeout(() => {window.location.reload()}, 100);
      event.target.reset()
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseGenre(data.genre));
      dispatch(chooseSeries(data.series));
      dispatch(chooseISBN(data.isbn));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 200);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md rounded px-10">
          <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Book Title</label>
              <Input {...register('title')} name='title' placeholder="Title" />
          </div>
          <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700">Book Author</label>
              <Input {...register('author')} name='author' placeholder="Author" />
          </div>
          <div className="mb-4">
              <label htmlFor="genre" className="block text-gray-700">Genre</label>
              <Input {...register('genre')} name='genre' placeholder="Genre" />
          </div>
          <div className="mb-4">
              <label htmlFor="series" className="block text-gray-700">Series</label>
              <Input {...register('series')} name='series' placeholder="Series" />
          </div>
          <div className="mb-4">
              <label htmlFor="isbn" className="block text-gray-700">ISBN Number</label>
              <Input {...register('isbn')} name='isbn' placeholder="ISBN Number" />
          </div>
          <button className="text-zinc-800 text-center bg-sky-100 shadow-md p-3 rounded-2xl font-normal text-md hover:bg-slate-200 hover:opacity-80 hover:text-stone-900 w-full">
              Submit
          </button>
      </form>
    </div>

  )
}

export default BookForm
