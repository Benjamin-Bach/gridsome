<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">À propos</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main> <!-- a wrapper for slot is needed -->
        <slot /> <!-- the content -->
      </main>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: 'EB Garamond',serif;
  margin:0;
  padding:0;
  line-height: 1.4;
  color: #444;
  background-color: #fefefe;
  font-size: 20px;
}
a{
  color: black;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

code[class*="language-"] *{
  font-size: 1rem;
}

</style>
