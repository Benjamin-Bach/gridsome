// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(actions => {
    const posts = actions.addCollection('Post')
    const tags = actions.addCollection('Tag')

    // makes all ids in the `tags` field reference a `Tag`
    posts.addReference('tags', 'Tag')

    tags.addNode({
      id: '1',
      title: 'The author'
    })

    posts.addNode({
      id: '1',
      title: 'A post',
      tags: ['1']
    })
  })
}
