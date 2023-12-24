import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Benefits() {
  const { data } = useQuery({
    queryKey: ['diff'],
    queryFn: async () => {
      const response = await axios.get('/api/getDiff')

      return response.data
    },
  })
  return (
    <section className="w-full relative flex gap-10 justify-center items-center bg-primary bg-opacity-5 sm:!py-20 pt-10 px-6">
      <div className="absolute  h-full w-full -z-10 -skew-y-2 opacity-50 bg-zinc-100"></div>
      <main className="flex max-w-[1440px] flex-col items-center justify-center text-center gap-10 relative">
        <div className="w-full gap-5 flex flex-col">
          <h1 className="font-logo text-secondary text-2xl sm:text-3xl">
            Descubra a melhor solução de transportadora do mercado!
          </h1>
          <div>
            <h1 className="font-logo text-xl sm:text-2xl">Contamos com</h1>

            <ul className="text-center">
              {data?.map((diff: string) => (
                <li key={diff} className="text-lg font-semibold text-secondary">
                  &#10003; {diff}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  )
}
