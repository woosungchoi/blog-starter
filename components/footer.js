import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-13 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-3xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
	        <Link href="/">
				<a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></a>
			</Link>            
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.wsgvet.com"
			  target="_blank"
			  rel="noopener noreferrer"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
             우성짱 홈페이지
            </a>
            <a
              href={`https://github.com/woosungchoi/blog-starter`}
			  target="_blank"
			  rel="noopener noreferrer"
              className="mx-3 font-bold hover:underline"
            >
              깃허브
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
