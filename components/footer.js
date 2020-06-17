import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-13 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-3xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            이 블로그는 Next.js와 마크다운으로<p></p> 만들어졌습니다.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
			  target="_blank"
			  rel="noopener noreferrer"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              문서 읽기
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
			  target="_blank"
			  rel="noopener noreferrer"
              className="mx-3 font-bold hover:underline"
            >
              깃허브에서 보기
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
