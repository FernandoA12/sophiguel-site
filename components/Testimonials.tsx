import { useQuery } from '@tanstack/react-query'
import { Thumbnail } from './Thumbnail'
import axios from 'axios'

export function Testimonials() {
  const { data } = useQuery<
    any,
    Error,
    { name: string; testimonial: string; thumbnail: string; business: string }[]
  >({
    queryKey: ['testimonial'],
    queryFn: async () => {
      const response = await axios.get('/api/getTestimonials')

      return response.data
    },
  })

  return (
    <section className="w-full flex justify-center items-center py-10  px-6 bg-zinc-100">
      <div className="w-full max-w-[1440px] gap-4 grid text-center">
        <span className="text-primary font-logo">Testemunhos</span>
        <h1 className="font-logo text-[#333] text-3xl">
          Depoimentos de nosso clientes e parceiros
        </h1>
        <span className="text-gray-500">O que nossos clientes tem a dizer</span>
        <ul className="flex gap-4 flex-wrap justify-center">
          {(data || []).map((line) => (
            <li
              key={line.name}
              className="py-10 border rounded-md flex flex-col shadow gap-3 px-10 bg-white max-w-[350px] items-center justify-center"
            >
              <Thumbnail thumbnail={line.thumbnail} name={line.name} />
              <h4 className="font-bold text-2xl">{line.name}</h4>
              <span className="text-zinc-500">{line.business}</span>
              <p className="italic text-sm">{line.testimonial}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
