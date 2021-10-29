import {MDXProvider} from '@mdx-js/react'
import HelloWorld from './hello-world'

const mdxComponents = {
  HelloWorld
}


export default function Providers({ children }) {
  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  )
}