import { tsx } from '@ast-grep/napi'
;(() => {
  tsx.findInFiles(
    {
      paths: ['./example'],
      matcher: {
        rule: {
          any: [
            {
              kind: 'import_statement',
            },
            {
              kind: 'export_statement',
            },
          ],
        },
      },
    },
    (err, resultNodes) => {
      if (err) {
        console.log(err)
      }

      const results = resultNodes.map((node) => {
        return {
          statement: node.text(),
          path: node.getRoot().filename(),
        }
      })

      console.log(results)
      // [ { statement: '{}', path: './example/foo.ts' } ]
      // Is it expected that files with the extension ts?
    }
  )
})()
