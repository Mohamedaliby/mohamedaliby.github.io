<template>
	<nav>
		<h1 class="logo"><a href="#">Logo</a></h1>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">about</a></li>
			<li><a href="#">work</a></li>
		</ul>
	</nav>
</template>


<script>
export default {};
</script>


<style scoped>
nav {
  margin-top: 5px;
}
.logo a,
nav a {
  text-align: center;
  display: block;
  padding: 10px 15px;
          color: #aaaa99;
}

@media (min-width: 769px) {
  nav {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }
  nav,
  ul {
    display: flex;
    align-items: center;
  }
  nav ul {
        border-bottom: 1px solid black;
  }
}
@media (min-width: 1025px) {
  nav {
    width: 80%;
    max-width: 1150px;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>



