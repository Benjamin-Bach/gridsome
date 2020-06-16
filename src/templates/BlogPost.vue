<template>
  <Layout>
    <h1 v-html="$page.post.title"/>
    <article v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    content
  }
}
</page-query>
