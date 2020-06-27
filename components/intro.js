import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
		<h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
			블로그.
		</h1>
      </Link>
    </section>
  )
}
