import Container from './container'
import cn from 'classnames'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <div className="">
        {preview ? (
          <>
            This page is a preview.{' '}
            <Link
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </Link>{' '}
            to exit preview mode.
          </>
        ) : (
          ''
          // <>
          //   The source code for this blog is{' '}
          //   <Link
          //     href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
          //     className="underline hover:text-success duration-200 transition-colors"
          //   >
          //     available on GitHub
          //   </Link>
          //   .
          // </>
        )}
      </div>
    </div>
  )
}
