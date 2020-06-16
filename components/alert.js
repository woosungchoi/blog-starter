import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              이 페이지는 프리뷰입니다.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                여기를 클릭하세요
              </a>{' '}
              프리뷰 모드를 벗어나려면.
            </>
          ) : (
            <>
              이 블로그의 소스코드는 {' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                깃허브
              </a>
              에서 사용할 수 있습니다.
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
