// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Ben's notepad",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark:{
          plugins: [
            [
              '@gridsome/remark-prismjs',
              {transformInlineCode: true}
            ]
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },

  ],
  templates: {
    BlogPost: [
      {
        path: (node) => {
          return `/${node.fileInfo.directory.replace('./','')}/${node.fileInfo.name}`
        }
      }
    ],
    Tag: '/tags/:title'
  }
}
