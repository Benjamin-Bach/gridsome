<template>
  <Layout>
    <h1 v-html="$page.post.title"/>
    <TaxonomyList :path="fake-path"/>
    <article v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    content
    taxonomy
  }
}
</page-query>

<script>

import TaxonomyList from "@/components/TaxonomyList";
export default {
  components: {
    TaxonomyList
  }
};

</script>