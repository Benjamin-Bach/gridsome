<template>
  <ul>
    <li v-for="term in $page.post.taxonomy" :key="term">
      {{ term }}
    </li>
  </ul>
</template>